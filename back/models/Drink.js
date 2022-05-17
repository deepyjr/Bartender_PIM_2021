//TODO
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    immatriculation: {
        type: String,
        required: true
    },
    modele: {
        type: String
    },
    marque: {
        type: String
    }
})

module.exports = mongoose.model("Drink", schema)