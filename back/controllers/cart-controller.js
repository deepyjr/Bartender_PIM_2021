const Cart = require('../models/Cart')
module.exports = {

    readAll(req, res) {
        Cart.find().then((carts) => {
            res.send(carts);
        }).catch((err) => {
            res.send(err);
        });
    },
    create(req, res) {
        //TODO a changer
        const name = req.body.name;
        const quantity = req.body.quantity;
        const price = req.body.price;

        const newCart = new Cart({
            name: name,
            quantity: quantity,
            price: price
        });
        newCart.save().then(() => {
            res.send("Commande ajoutée au panier");
        }).catch((err) => {
            res.send(err);
        });
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