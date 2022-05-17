const Drink = require('../models/Drink')
module.exports = {

    readAll(req, res) {
        Drink.find().then((drinks) => {
            res.send(drinks);
        }).catch((err) => {
            res.send(err);
        });
    },
    readOne(req, res) {
        Drink.findOne({ immatriculation: req.params.immatriculation }).then((drink) => {
            res.send(drink);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {
        //TODO a changer
        const immatriculation = req.body.immatriculation;
        const modele = req.body.modele;
        const marque = req.body.marque;

        const newDrink = new Drink({
            immatriculation: immatriculation,
            modele: modele,
            marque: marque
        });
        newDrink.save().then(() => {
            res.send("La boisson a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });
    },

    delete(req, res) {
        const immatriculation = req.params.immatriculation;
        Drink.findOneAndRemove({ immatriculation: immatriculation }).then((drink) => {
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

        Drink.findOneAndUpdate(filter, dataToUpdate, { new: true })
            .then((drink) => {
                res.send(drink)
            })
            .catch(function (error) {
                res.send(error);
            });
    }
};