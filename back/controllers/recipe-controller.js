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
        Recipe.findById(req.params.id).then((recipe) => {
            res.send(recipe);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {

        const name = req.body.name;
        const drinks = req.body.drinks;

        const newRecipe = new Recipe({
            name: name,
            drinks: drinks
        });
        newRecipe.save().then(() => {
            res.send("La recette a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });

    },

    delete(req, res) {
        Recipe.findByIdAndDelete(req.params.id).then((recipe) => {
            const message = "La recette a bien été supprimée"
            res.send(message);
        }).catch((err) => {
            res.send(err);
        });
    },

    update(req, res) {
        const dataToUpdate = {
            name: req.body.name,
            drinks: req.body.drinks
        }

        Recipe.findByIdAndUpdate(req.param.id, dataToUpdate, { new: true })
            .then((recipe) => {
                res.send(recipe)
            })
            .catch(function (error) {
                res.send(error);
            });
    },

    deleteAll(req, res) {
        Recipe.deleteMany({}).then((recipe) => {
            const message = "Toutes les recettes ont été suprimées"
            res.send(message);
        }).catch((err) => {
            res.send(err);
        });
    },
};