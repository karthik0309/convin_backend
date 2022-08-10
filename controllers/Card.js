const Card = require('../models/Cards')
const Bucket = require('../models/Bucket')

exports.createCard=async(req,res)=>{
    try{
        const {name,link,bucket,user} = req.body

        const newCard =  new Card({
            name:name,
            link:link,
            user:user,
            bucket:bucket
        })

        let card=await newCard.save()
        await Card.populate(card,{path:'bucket'})

        return res.status(200).json(card)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getCardsByUser=async(req,res)=>{
    try{
        const {user} = req.query
        const cards = await Card.find({user:user})
                            .populate("bucket")
        return res.status(200).json(cards)

    }catch(err){
        res.status(500).json(err)
    }
}

exports.updateCardName=async(req,res)=>{
    try{
        if(req.body.bucket!=undefined){
            let bucket = await Bucket.exists({name:req.body.bucket})

            if(!bucket){
                const newBucket = new Bucket({
                    name:req.body.bucket
                })
                bucket = await newBucket.save()
            }
    
            req.body.bucket=bucket._id
        }
        
        const card = await Card.findByIdAndUpdate({_id:req.body._id},
            {$set:req.body},{new:true, useFindAndModify:false})
            .populate("bucket")

        res.status(200).json(card)

    }catch(err){
        res.status(500).json(err)
    }
}

exports.deleteCards=async(req,res)=>{
    try{
        const {cardIds} = req.body
        await Card.deleteMany({
            _id:{
                $in:cardIds
            }
        })

        res.status(200).json({message:"Deleted cards successfully"})
    }catch(err){
        res.status(500).json(err)
    }
}