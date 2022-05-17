const Trolley = require('../models/Trolley')
module.exports = {

    readAll(req, res) {
        Trolley.find().then((trolleys) => {
            res.send(trolleys);
        }).catch((err) => {
            res.send(err);
        });
    },
    create(req, res) {
        //TODO a changer
        const name = req.body.name;
        const quantity = req.body.quantity;
        const price = req.body.price;

        const newTrolley = new Trolley({
            name: name,
            quantity: quantity,
            price: price
        });
        newTrolley.save().then(() => {
            res.send("Commande ajoutée au panier");
        }).catch((err) => {
            res.send(err);
        });
    },
    deleteAll(req, res) {
        Trolley.deleteMany({}).then((trolley) => {
            const message = "Caddit supprimé"
            res.send(message);
        }).catch((err) => {
            res.send(err);
        });
    },

};