const dateFunctions = require("../functions/date-functions");
const findFunctions = require("../functions/find-functions");
const mongoose = require("mongoose");
const cartController = require("./cart-controller");
const { resolve } = require("path");
const Cart = require('../models/Cart')

function OrdersStatus() {
  return new Promise((resolve, reject) => {
    mongoose
      .model("carts")
      .find({})
      .exec(function (err, items) {
        if (err) {
          reject(err);
        } else {
          tempData = items;
          if (tempData.length === 0) {
            resolve("Il n'y plus de cocktails à préparer");
          } else {
            OrderCocktail();
            resolve("Des cocktails sont encore en atttente");
          }
        }
      });
  });
}

function OrderCocktail() {
  return new Promise((resolve, reject) => {
    console.log("cocktail");
    //get all data from cart
    mongoose
      .model("carts")
      .find({})
      .exec(function (err, items) {
        if (err) {
          reject(err);
        } else {
          tempData = items;
          oldestOrder = findFunctions.findTheOldestElement(tempData);

          // check if there is data with status "en cours"
          if (oldestOrder.status !== "en cours") {

            Cart.findOneAndUpdate({_id : oldestOrder.id}, {$set:{status : "en cours"}}).then(() => {
                    console.log("updated");
            }).catch((err) => {
                    console.log(err);
            });
            // axios.post('', cocktail)
            // .then(response => console.log(response))
            // .catch(error => {
            //     console.error('There was an error!', error);
            // });
            resolve(oldestOrder);
          } else if (oldestOrder.status === "en cours") {
            resolve("Commande en cours de réalisation");
          } else {
            resolve("Commande terminée");
          }
        }
      });
  });
}

module.exports = {
  OrdersStatus: async () => {
    let ordersStatus = await OrdersStatus();
    return ordersStatus;
  },
  OrderCocktail: async () => {
    let orderCocktail = await OrderCocktail();
    return orderCocktail;
  },
};
