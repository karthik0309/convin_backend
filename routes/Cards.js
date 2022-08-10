const router = require('express').Router()
const {isSignedIn} = require('../controllers/Auth')
const {createCard,getCardsByUser,updateCardName,deleteCards} = require('../controllers/Card')


router.post("/",isSignedIn,createCard)
router.get("/",isSignedIn,getCardsByUser)
router.put("/",isSignedIn,updateCardName)
router.delete("/",isSignedIn,deleteCards)

module.exports = router