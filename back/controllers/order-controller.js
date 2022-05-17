const Order = require('../models/Order')
module.exports = {

    readAll(req, res) {
        Order.find().then((orders) => {
            res.send(orders);
        }).catch((err) => {
            res.send(err);
        });
    },
    readOne(req, res) {
        Order.findOne({ immatriculation: req.params.immatriculation }).then((order) => {
            res.send(order);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {
        //TODO a changer
        const immatriculation = req.body.immatriculation;
        const modele = req.body.modele;
        const marque = req.body.marque;

        const newOrder = new Order({
            immatriculation: immatriculation,
            modele: modele,
            marque: marque
        });
        newOrder.save().then(() => {
            res.send("La commande a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });
    },

    delete(req, res) {
        const immatriculation = req.params.immatriculation;
        Order.findOneAndRemove({ immatriculation: immatriculation }).then((order) => {
            //const message = "Voiture immatriculatiée:" + immatriculation + " a bien été supprimée"
            res.send(message);
        }).catch((err) => {
            res.send(err);
        });
    },

    update(req, res) {
        const filter = { immatriculation: req.params.immatriculation }
        const dataToUpdate = {
            modele: req.body.modele,
            marque: req.body.marque
        }

        Order.findOneAndUpdate(filter, dataToUpdate, { new: true })
            .then((order) => {
                res.send(order)
            })
            .catch(function (error) {
                res.send(error);
            });
    }
};