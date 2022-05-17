//TODO
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    dateOrder: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("WaitingOrder", schema)