const mongoose = require("mongoose")

const myschema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },

    interest:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("NewData",myschema)