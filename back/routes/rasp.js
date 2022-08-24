const raspController = require('../controllers/rasp-controller');

module.exports = (server) => {
    server.get('/rasp', async function(req,res){
        let commandIsDone = await raspController.CommandIsDone().then((result) => {
            return (result);
          }).catch((err) => {
            res.send('erreur :' + err);
          })
        
          res.json(commandIsDone)
    });
}