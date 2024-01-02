const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title: {
        type:String
    },
    description: {
        type:String
    },
    status: {
        type:String,
        default:"Active"
    }
  });

  module.exports=mongoose.model('tasks',taskSchema)