RecipeController = require('../controllers/recipe-controller');
module.exports = (server) => {
    server.get('/recipes', RecipeController.readAll);
    server.post('/recipe', RecipeController.create);
    server.get('/recipe/:id', RecipeController.readOne);
    server.put('/recipe/:id', RecipeController.update);
    server.delete('/recipe/:id', RecipeController.delete);
}