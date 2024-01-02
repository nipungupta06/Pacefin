const db = require("./db");
const express = require("express");
const bodyParser = require('body-parser');
const Task = require("./model");
const app = express();
const port = 8080;
// Connect to Database
db();
app.use(bodyParser.json());

// Get all Tasks
app.get('/get/tasks',async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
})

// Get Task by id
app.get('/get/tasks/:id',async(req,res)=>{
    try {
        const tasks = await Task.find({id:req.params.id});
        if(tasks.length === 0){res.status(400).send("Enter valid Id")}
        res.json(tasks);
    } 
    catch (error) {
        console.log(error)
    }
    
})

// Post a new task
app.post('/post/tasks',async(req,res)=>{
    const {id,title,description,status} = req.body;
    try {
        if(!id){res.status(400).send("Please enter id")}
        const task = new Task({
            id,title,description,status
        })
        await task.save();
        res.status(200).send("Task added successfully")
    } 
    catch (error) {
        console.log(error)    
    }
})

// Edit a exisiting task
app.put('/put/tasks/:id',async(req,res)=>{
    try {
        const {id,title,description,status} = req.body;
        const query={id:req.params.id};
        const newTask = {};
        if(id){newTask.id=id};
        if(title){newTask.title=title};
        if(description){newTask.description=description};
        if(status){newTask.status=status};
        const response=await Task.findOneAndUpdate(query,{$set:newTask});
        if(response===null){res.status(400).send("Enter correct id")}
        res.status(200).send("Task Updated successfully")
    } catch (error) {
        console.log(error);
    }
})

// Delete a Task
app.delete('/delete/tasks/:id',async(req,res)=>{
    try {
        const response = await Task.findOneAndDelete({id:req.params.id});
        if(response===null){res.status(400).send("Enter correct id")}
        res.status(200).send("Deleted successfully");
    } catch (error) {
        console.log(error)
    }
})


// Start Listening to Port
app.listen(port,()=>{
    console.log("Listening to port ",port);
})