import express from 'express';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
import studentmodel from './model/studentmodel.js';

const app = express()

function dbconnection() {

}

await mongoose.connect("mongodb://localhost:27017/school").then (()=>{
    console.log("connect");
})

app.get ('/', async(req, res) =>{
    
    const studentdata = await studentmodel.find();
    res.send(studentdata)

})

app.listen(4004)