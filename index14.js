import express from 'express';
import { MongoClient } from "mongodb";
// import { connection } from 'mongoose';

const app = express()

const dbname = "school";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

client.connect().then((connection) =>{

    const db = connection.db(dbname)
    app.get('/api', async(req, res) => {
    
        // client.connect();
        // const db = client.db(dbname)
        const collection = db.collection('students');
        const result = await collection.find().toArray();
        // console.log(result);
        
        res.send(result);
    
    })

    app.use(express.urlencoded({extended : true}))

    app.use(express.json())

    app.set('view engine', 'ejs');

    app.get('/ui', async(req, res) => {
    
        // DATA fetch form DB

        // client.connect();
        // const db = client.db(dbname)
        const collection = db.collection('students');
        const result = await collection.find().toArray();
        console.log(result);
        
        res.render("student", {result});
    
    })    

    app.get('/',(req, res) => {
        res.render("addstudent")
    })


    app.post('/addstudent', async(req, res) => {

        // Data insertion to DB
        console.log(req.body);        
        const collection = db.collection('students');
        const result = await collection.insertOne(req.body);
        console.log(result);        
        res.send("Data Saved");
    
    })    

    app.post('/addstudentapi', async(req, res) =>{
        
        const {name , age, email, mobile} = req.body;

        if (!name || !age || !email || !mobile) {
            res.send({Message : "Operation Failed", Success : false})
            return false;
        }

        console.log(req.body);   
        const collection = db.collection('students');
        const result = await collection.insertOne(req.body);     
        res.send({Message: "Data Stored", Success : true , result: result})

    })

})


app.listen(4004)