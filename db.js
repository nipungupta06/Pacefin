require('dotenv').config()
const mongoose = require("mongoose");

const url=`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster.s1wbyyy.mongodb.net/?retryWrites=true&w=majority`;

const connecttomongo = async()=>{
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log(error);
    }
    
}
module.exports=connecttomongo;