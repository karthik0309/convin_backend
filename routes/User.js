const router = require('express').Router()
const {isSignedIn} = require('../controllers/Auth')
const {getUserById,getUser}=require('../controllers/User')

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, getUser);
router.get("/cards/user/:userId",isSignedIn)

module.exports = router
