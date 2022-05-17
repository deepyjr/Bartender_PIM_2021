OrderController = require('../controllers/order-controller');
module.exports = (server) => {
    server.get('/orders', OrderController.readAll);
    server.post('/order', OrderController.create);
    server.get('/order/:id', OrderController.readOne);
    server.put('/order/:id', OrderController.update);
    server.delete('/order/:id', OrderController.delete);
}