const WaitingOrder = require('../models/WaitingOrder')
module.exports = {

    readAll(req, res) {
        WaitingOrder.find().then((waitingOrder) => {
            res.send(waitingOrder);
        }).catch((err) => {
            res.send(err);
        });
    },
    readOne(req, res) {
        WaitingOrder.findOne({ immatriculation: req.params.immatriculation }).then((waitingOrder) => {
            res.send(waitingOrder);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {
        //TODO a changer
        const immatriculation = req.body.immatriculation;
        const modele = req.body.modele;
        const marque = req.body.marque;

        const newWaitingOrder = new WaitingOrder({
            immatriculation: immatriculation,
            modele: modele,
            marque: marque
        });
        newWaitingOrder.save().then(() => {
            res.send("La commande a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });
    },

    delete(req, res) {
        const immatriculation = req.params.immatriculation;
        WaitingOrder.findOneAndRemove({ immatriculation: immatriculation }).then((waitingOrder) => {
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

        WaitingOrder.findOneAndUpdate(filter, dataToUpdate, { new: true })
            .then((waitingOrder) => {
                res.send(waitingOrder)
            })
            .catch(function (error) {
                res.send(error);
            });
    }
};