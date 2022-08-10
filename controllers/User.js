const User = require('../models/Users')

exports.getUserById=async(req,res,next,id)=>{
    try{
        const user = await User.findById(id)

        if(!user){
            return res.status(400).json({err:"No user found"})
        }

        res.profile=user;
        next();
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getUser=async(req, res)=>{
    try{
        res.profile.password=undefined
        return res.profile
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getUserCards=async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err)
    }
}