require('dotenv').config()
const mongoose = require("mongoose");

const url=process.env.url;

const connecttomongo = async()=>{
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log(error);
    }
    
}
module.exports=connecttomongo;