CartController = require('../controllers/cart-controller');
module.exports = (server) => {
    server.get('/carts', CartController.readAll);
    server.post('/cart', CartController.create);
    server.delete('/cart', CartController.deleteAll);
}