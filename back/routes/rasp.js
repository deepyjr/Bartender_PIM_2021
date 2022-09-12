const raspController = require("../controllers/rasp-controller");

module.exports = (server) => {
  server.get("/rasp/order-cocktail", async function (req, res) {
    let orderCocktail = await raspController
      .OrderCocktail()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        res.send("erreur :" + err);
      });
    res.json(orderCocktail);
  });

  server.get("/rasp/order-status", async function (req, res) {
    let orderCocktail = await raspController
      .OrdersStatus()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        res.send("erreur :" + err);
      });

    res.json(orderCocktail);
  });
};
