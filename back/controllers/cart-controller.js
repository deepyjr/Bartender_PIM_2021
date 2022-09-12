const Cart = require("../models/Cart");
const dateFunctions = require("../functions/date-functions");
const mongoose = require("mongoose");
const raspController = require("./rasp-controller");

function ReadAll() {
  return new Promise((resolve, reject) => {
    Cart.find()
      .then((carts) => {
        resolve(carts);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function UpdateStatusById(id, status) {
  return new Promise((resolve, reject) => {
    Cart.findOneAndUpdate(
      { _id: id },
      { $set: { status: status } }
    )
      .then(() => {
         resolve("updated");
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function CreateCart(data) {
  return new Promise((resolve, reject) => {
    data.forEach((item) => {
      console.log(item);
      const cartItem = new Cart({
        drink: item.name,
        quantity: item.quantity,
        price: item.price,
        dateOrdered: dateFunctions.getDateNow(),
        status: "en attente",
        nametag: item.nametag
      });
      mongoose.model("carts").create(cartItem, function (err, cart) {
        if (err) {
          reject(err);
        } else {
          resolve(cart);
        }
      });
    });
  });
}

function DeleteAll() {
  return new Promise((resolve, reject) => {
    Cart.deleteMany({})
      .then((cart) => {
        const message = "Caddit supprimé";
        resolve(message);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  UpdateStatusById: async (id, status) => {
    let createCart = await UpdateStatusById(id, status);
    return createCart;
  },
  ReadAll: async () => {
    let readAll = await ReadAll();
    return readAll;
  },
  CreateCart: async (data) => {
    let createCart = await CreateCart(data);
    return createCart;
  },
  DeleteAll: async () => {
    let deleteAll = await DeleteAll();
    return deleteAll;
  },
};
