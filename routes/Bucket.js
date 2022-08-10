const router = require('express').Router()
const {createBucket,getAllBuckets} = require('../controllers/Bucket')

router.post("/",createBucket)
router.get("/",getAllBuckets)

module.exports=router