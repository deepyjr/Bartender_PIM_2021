//TODO
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id_Drink: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        min: 0,
        max: 100,
        required: true
    }
})

module.exports = mongoose.model("QuantityMachine", schema)