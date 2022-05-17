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
        Drink.findById(req.params.id).then((drink) => {
            res.send(drink);
        }).catch((err) => {
            res.send(err);
        })
    },
    create(req, res) {
        //TODO a changer
        const name = req.body.name;
        const type = req.body.type;
        const srcImg = req.body.srcImg;

        const newDrink = new Drink({
            name: name,
            type: type,
            srcImg: srcImg
        });
        newDrink.save().then(() => {
            res.send("La boisson a bien été ajoutée");
        }).catch((err) => {
            res.send(err);
        });
    },
    delete(req, res) {
        Drink.findByIdAndDelete(req.params.id).then((drink) => {
            const message = " Boisson: a bien été supprimée"
            res.send(message);
        }).catch((err) => {
            res.send(err);
        });
    },
    update(req, res) {
        const dataToUpdate = {
            name: req.body.name,
            type: req.body.type,
            srcImg: req.body.srcImg
        }

        Drink.findByIdAndUpdate(req.params.id, dataToUpdate, { new: true })
            .then((drink) => {
                res.send(drink)
            })
            .catch(function (error) {
                res.send(error);
            });
    }
};