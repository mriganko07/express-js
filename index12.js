import express from 'express';
import { MongoClient } from "mongodb";

const app = express()

const dbname = "school";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection("students");
    const result = await collection.find().toArray();
    // console.log(result);
    res.render("student", { result });
});


app.listen(4004)