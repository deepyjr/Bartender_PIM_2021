const Recipe = require('../models/Recipe')
module.exports = {

    readAll(req, res) {
        Recipe.find().then((recipe) => {
            res.send(recipe);
        }).catch((err) => {
            res.send(err);
        });
    },
    readOne(req, res) {
        Recipe.findOne({ immatriculation: req.params.immatriculation }).then((recipe) => {
            res.send(recipe);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {
        //TODO a changer
        const immatriculation = req.body.immatriculation;
        const modele = req.body.modele;
        const marque = req.body.marque;

        const newRecipe = new Recipe({
            immatriculation: immatriculation,
            modele: modele,
            marque: marque
        });
        newRecipe.save().then(() => {
            res.send("La commande a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });
    },

    delete(req, res) {
        const immatriculation = req.params.immatriculation;
        Recipe.findOneAndRemove({ immatriculation: immatriculation }).then((recipe) => {
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

        Recipe.findOneAndUpdate(filter, dataToUpdate, { new: true })
            .then((recipe) => {
                res.send(recipe)
            })
            .catch(function (error) {
                res.send(error);
            });
    }
};