const Cart = require('../models/Cart')
const dateFunctions = require('../functions/date-functions')
const mongoose = require('mongoose');

module.exports = {

    readAll(req, res) {
        Cart.find().then((carts) => {
            res.send(carts);
        }).catch((err) => {
            res.send(err);
        });
    },
    create(req, res) {
        console.log('Route de création de Panier')
        req.body.forEach((item) => {
            const cartItem = new Cart({
                drink: item.name,
                quantity: item.quantity,
                price: item.price,
                dateOrdered: dateFunctions.getDateNow(),
                status:"en attente"
            })
            mongoose.model('carts').create(cartItem, function (err, cart) {
                if (err) {
                    console.error(err)
                } else{
                    console.log("created",cart)
                }
            });
            const message = "Commande passée avec succès vos boissons sont dans la file d'attente veuillez mettre votre verre"
            res.send(message);
        })
    },
    deleteAll(req, res) {
        Cart.deleteMany({}).then((cart) => {
            const message = "Caddit supprimé"
            res.send(message);
        }).catch((err) => {
            res.send(err);
        });
    },

};