const QuantityMachine = require('../models/QuantityMachine')
module.exports = {

    readAll(req, res) {
        QuantityMachine.find().then((quantityMachines) => {
            res.send(quantityMachines);
        }).catch((err) => {
            res.send(err);
        });
    },
    readOne(req, res) {
        QuantityMachine.findOne({ immatriculation: req.params.immatriculation }).then((quantityMachine) => {
            res.send(quantityMachine);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {
        //TODO a changer
        const immatriculation = req.body.immatriculation;
        const modele = req.body.modele;
        const marque = req.body.marque;

        const newQuantityMachine = new QuantityMachine({
            immatriculation: immatriculation,
            modele: modele,
            marque: marque
        });
        newQuantityMachine.save().then(() => {
            res.send("La commande a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });
    },

    delete(req, res) {
        const immatriculation = req.params.immatriculation;
        QuantityMachine.findOneAndRemove({ immatriculation: immatriculation }).then((quantityMachine) => {
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

        QuantityMachine.findOneAndUpdate(filter, dataToUpdate, { new: true })
            .then((quantityMachine) => {
                res.send(quantityMachine)
            })
            .catch(function (error) {
                res.send(error);
            });
    }
};