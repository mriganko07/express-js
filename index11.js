import express from 'express';
import { MongoClient } from "mongodb";

const app = express()

const dbname = "school";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function dbconnection() {
    await client.connect();
    const db = client.db(dbname)
    const collection = db.collection("students");
    const result = await collection.find().toArray();
    console.log(result);    
}

dbconnection()

app.listen(4004)