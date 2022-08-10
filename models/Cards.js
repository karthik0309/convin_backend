const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const CardSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    user:{
        type:ObjectId,
        ref:"User",
        required:true 
    },
    bucket:{
       type:ObjectId,
       ref:"Bucket",
       required:true 
    },
    played:{
        type:Boolean,
        default:false
    },
    lastPlayed:{
        type:Date,
        default:Date.now()
    }

},
{timestamp:true})

module.exports = mongoose.model("Card",CardSchema)