//TODO
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    //recette nom , recette quantité + recette prix
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model("Cart", schema)
