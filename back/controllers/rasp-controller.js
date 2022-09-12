const dateFunctions = require("../functions/date-functions");
const findFunctions = require("../functions/find-functions");
const mongoose = require("mongoose");
const cartController = require("./cart-controller");
const { resolve } = require("path");
const Cart = require("../models/Cart");
const axios = require("axios");

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
      .exec(async function (err, items) {
        if (err) {
          reject(err);
        } else {
          for (const i of items) {
            tempData = items;
            oldestOrder = i

            //check if there is data with status "en cours"
            if (
              oldestOrder.status !== "en cours" &&
              oldestOrder.status !== "Terminée"
            ) {
              await Cart.findOneAndUpdate(
                { _id: oldestOrder.id },
                { $set: { status: "en cours" } }
              )
                .then(() => {
                  console.log("updated");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            if (oldestOrder.status !== "Terminée") {
            await axios
              .get("http://192.168.0.21:3000/" + i.nametag)
              .then(async (response) => {
                console.log("commande effectuée");
                await Cart.findOneAndUpdate(
                  { _id: oldestOrder.id },
                  { $set: { status: "Terminée" } }
                )
                  .then(() => {
                    console.log("update à terminée");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((error) => {
                console.error("There was an error!", error);
              });
            }
          }
        }
        resolve("commande terminée");
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
