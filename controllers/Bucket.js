const Bucket = require('../models/Bucket')

exports.createBucket=async(req,res)=>{
    try{
        const {name} = req.body
        const findDup = Bucket.find({name:name})

        if(!name){
            return res.status("500").json({err:"bucket already exists or empty"})
        }
        const newBucket = new Bucket({
            name:name
        })
        
        const bucket = await newBucket.save()
        res.status(200).json(bucket)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getAllBuckets=async(req,res)=>{
    try{    
        const buckets = await Bucket.find().limit(8)
        res.status(200).json(buckets)
    }catch(err){
        res.status(500).json(err)
    }
}