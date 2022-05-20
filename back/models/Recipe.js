const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    drinks: [{
        id_drink: { type: String },
        quantity: { type: Number }
    }]
})

module.exports = mongoose.model("Recipe", schema)
