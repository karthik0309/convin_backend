require("dotenv").config();
const User = require('../models/Users')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt');
const { validationResult } = require("express-validator");

exports.signUp = async(req,res)=>{
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(422).json({
                error: errors.array()[0].msg
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
    
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass,
        });
    
        const user = await newUser.save();
        const token = jwt.sign({_id:user._id},process.env.SECRET)
        res.cookie("token",token,{expire:new Date()+99999})

        user.password= undefined;
        res.status(200).json({user:user,token:token});

    }catch(err){
        return res.status(500).json(err)
    }
}

exports.signIn=async(req,res)=>{
    try{
        const { email, password } = req.body;
        
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json("User not found");
        }

        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            return res.status(401).json("Incorrect password");
        }

        const token = jwt.sign({_id:user._id},process.env.SECRET)
        res.cookie("token",token,{expire:new Date()+99999})

        user.password = undefined;
        res.status(200).json({user:user,token:token});
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.signOut = (req, res) => {
    res.clearCookie("token");
    res.json({
      message: "User signout successfully"
    });
};


exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
});
