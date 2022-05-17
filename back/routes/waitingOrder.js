WaitingOrderController = require('../controllers/waitingOrder-controller');
module.exports = (server) => {
    server.get('/waitingOrders', WaitingOrderController.readAll);
    server.post('/waitingOrder', WaitingOrderController.create);
    server.get('/waitingOrder/:id', WaitingOrderController.readOne);
    server.put('/waitingOrder/:id', WaitingOrderController.update);
    server.delete('/waitingOrder/:id', WaitingOrderController.delete);
}