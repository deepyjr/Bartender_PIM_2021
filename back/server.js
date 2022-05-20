const express = require('express');

const routeDrink = require('./routes/drink')
const routeOrder = require('./routes/order')
const routeQuantityMachine = require('./routes/quantityMachine')
const routeRecipe = require('./routes/recipe')
const routeWaitingOrder = require('./routes/waitingOrder')
const routeCart = require('./routes/cart')


const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('json spaces', 2);

routeDrink(server);
routeOrder(server);
routeQuantityMachine(server);
routeRecipe(server);
routeWaitingOrder(server);
routeCart(server);

server.listen(8080, () => {
    console.log("Serveur demarré en écoute sur le porte 8080 !")
    mongoose.connect('mongodb://localhost/nodejs_evaluation');
    mongoose.connection
        .once('open', () => console.log("Connexion à Mongo réussie"))
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});
