const mongoose = require('mongoose')

const BucketSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{timestamp:true})


module.exports = mongoose.model("Bucket",BucketSchema)