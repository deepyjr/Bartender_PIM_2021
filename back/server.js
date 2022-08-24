const express = require('express');
const cors = require('cors');
const routeDrink = require('./routes/drink')
const routeCart = require('./routes/cart')
const routeRasp = require('./routes/rasp')

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('json spaces', 2);
server.use(cors({
    origin: '*'
  }));
  
routeDrink(server);
routeCart(server);
routeRasp(server);

server.listen(8080, () => {
    console.log("Serveur demarré en écoute sur le porte 8080 !")
    mongoose.connect('mongodb://localhost/PimBatender');
    mongoose.connection
        .once('open', () => console.log("Connexion à Mongo réussie"))
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});
