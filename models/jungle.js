const mongoose = require("mongoose")
const jungleSchema = mongoose.Schema({
animal_name: {
    type:String,
    required:true
},
animal_type: {
    type:String,
    required:true
},
animal_quantity: {
    type:Number,
    required:true,
    min:0,
    max:100
}
})

module.exports = mongoose.model("jungle", jungleSchema)