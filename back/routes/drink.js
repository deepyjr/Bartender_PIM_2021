DrinkController = require('../controllers/drink-controller');
module.exports = (server) => {
    server.get('/drinks', DrinkController.readAll);
    server.post('/drink', DrinkController.create);
    server.get('/drink/:id', DrinkController.readOne);
    server.put('/drink/:id', DrinkController.update);
    server.delete('/drink/:id', DrinkController.delete);
}