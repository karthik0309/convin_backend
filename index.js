require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const userRouter = require('./routes/User')
const authRouter = require('./routes/Auth')
const cardRouter = require('./routes/Cards')
const bucketRouter = require('./routes/Bucket')



//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//DB connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("DB CONNECTED"))
.catch(err=>console.log(err))

app.use("/",userRouter)
app.use("/",authRouter)
app.use("/cards",cardRouter)
app.use("/bucket",bucketRouter)



const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`BACKEND RUNNING IN PORT ${PORT}`)
})