const mongoose = require("mongoose")
const jungleSchema = mongoose.Schema({
animal_name: String,
animal_type: String,
animal_quantity: Number
})

module.exports = mongoose.model("jungle", jungleSchema)