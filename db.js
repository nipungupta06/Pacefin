const mongoose = require("mongoose");

const url="mongodb://localhost:27017/Pacefin";

const connecttomongo = async()=>{
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log("Can't Connect to Mongodb. Check the Connection url");
    }
    
}
module.exports=connecttomongo;