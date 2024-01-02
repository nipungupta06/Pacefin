require('dotenv').config()
const mongoose = require("mongoose");

const url=`mongodb+srv://${process.env.USER}:${process.env.PASS}@pacefin.0xa5om4.mongodb.net`;

const connecttomongo = async()=>{
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log("Can't Connect to Mongodb. Check the Connection url");
    }
    
}
module.exports=connecttomongo;