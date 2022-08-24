//TODO
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    drink: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    dateOrdered: {
        type: String
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model("carts", schema)
