import express from 'express';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
import studentmodel from './model/studentmodel.js';

const app = express()

function dbconnection() {

}

app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/school").then (()=>{
    console.log("connect");
})


app.get ('/', async(req, res) =>{
    
    const studentdata = await studentmodel.find();
    res.send(studentdata)

})

app.post('/save', async(req, res) =>{

    console.log(req.body);
    const studentdata = await studentmodel.create(req.body);
    res.send({"Message" : " Data Saved", "Success" : true, storedinfo: studentdata})
})

app.listen(4444)