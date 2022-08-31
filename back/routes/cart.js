cartController = require("../controllers/cart-controller");
module.exports = (server) => {
  server.get("/carts", CartController.readAll);
  server.post("/cart", CartController.createCart);
  server.delete("/cart", CartController.deleteAll);
  server.put("/cart/updateById", CartController.updateStatusById);
};

module.exports = (server) => {
  server.get("/cart", async function (req, res) {
    let readAll = await cartController
      .ReadAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        res.send("erreur :" + err);
      });
    res.json(readAll);
  });

  server.post("/cart", async function (req, res) {
    let createCart = await cartController
      .CreateCart(req.body)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        res.send("erreur :" + err);
      });
    res.json(createCart);
  });

  server.delete("/cart", async function (req, res) {
    let deleteAll = await cartController
      .DeleteAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        res.send("erreur :" + err);
      });
    res.json(deleteAll);
  });

  server.post("/cart/updateById", async function (req, res) {
    let updateStatusById = await cartController
      .UpdateStatusById(req.data.id, req.data.status)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        res.send("erreur :" + err);
      });
    res.json(updateStatusById);
  });
  
};
