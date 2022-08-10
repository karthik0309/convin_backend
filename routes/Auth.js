const router=require('express').Router()
const { check } = require("express-validator");
const {signUp,signIn,signOut} = require('../controllers/Auth')

router.post("/signup",[
    check("name","Name should be atleast of 3 chars").isLength({min:3}).isAlpha(),
    check("email","Email is required").isEmail(),
    check("password","password should be at least 3 char").isLength({min:3}),
    
],signUp)

router.post("/signin",[
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
],signIn)

router.get("/signout", signOut);

module.exports = router;
