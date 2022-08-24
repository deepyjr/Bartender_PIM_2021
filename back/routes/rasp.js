raspController = require('../controllers/rasp-controller');

module.exports = (server) => {
    server.get('/rasp',raspController.commandIsDone);
}