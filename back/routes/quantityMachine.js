QuantityMachineController = require('../controllers/quantityMachine-controller');
module.exports = (server) => {
    server.get('/quantityMachines', QuantityMachineController.readAll);
    server.post('/quantityMachine', QuantityMachineController.create);
    server.get('/quantityMachine/:id', QuantityMachineController.readOne);
    server.put('/quantityMachine/:id', QuantityMachineController.update);
    server.delete('/quantityMachine/:id', QuantityMachineController.delete);
}