const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        validate: {
            validator: function (arr) {
                const validType = ['Alcool', 'Soft']
                return validType.includes(arr)
            },
            message: "Valid type: Alcool / Soft"
        }
    },
    srcImg: {
        type: String
    }
})

module.exports = mongoose.model("Drink", schema)