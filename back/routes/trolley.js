TrolleyController = require('../controllers/trolley-controller');
module.exports = (server) => {
    server.get('/trolleys', TrolleyController.readAll);
    server.post('/trolley', TrolleyController.create);
    server.delete('/trolley', TrolleyController.deleteAll);
}