import express from 'express';
import { MongoClient, ObjectId } from "mongodb";
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

    app.delete('/delete/:id', async(req, res) => {
        
        // console.log(req.params.id);
        // res.send("Delete")
        const collection = db.collection('students');
        const result = await collection.deleteOne({_id : new ObjectId(req.params.id)});     
        if (result) {
            res.send({"Message" : "Student Data Deleted", 'Success' : true})
        }

        else{
            res.send({"Message" : "Student Data Not Deleted", 'Success' : false})
        }
        // console.log(result);
        
    })

    
    app.get('/ui/delete/:id', async(req, res) => {
        
        const collection = db.collection('students');
        const result = await collection.deleteOne({_id : new ObjectId(req.params.id)});     

        if (result) {
            res.send("Student Record Deleted")
        }

        else{
            res.send("Student Record Not Deleted");
        }
        
    })

    app.set('view engine', 'ejs');

    app.get('/ui/student/:id', async(req, res) =>{
        
        const id = req.params.id;
        console.log(id);
        const collection = db.collection('students');
        const result = await collection.findOne({_id : new ObjectId(id)});  
        res.render("updatestudent", {result}) 
        // res.send(result)
    })


    app.get('/ui/student/:id', async(req, res) =>{
        
        const id = req.params.id;
        console.log(id);
        const collection = db.collection('students');
        const result = await collection.findOne({_id : new ObjectId(id)});  
        res.send({Message : "Data Fetch", Success : true}) 
        // res.send(result)
    })

    
    app.get('/student/:id', async(req, res) =>{
        
        const id = req.params.id;
        console.log(id);
        const collection = db.collection('students');
        const result = await collection.findOne({_id : new ObjectId(id)});  
        res.send({Message : "Data Fetch", Success : true}) 
        // res.send(result)
    })


    app.post("/ui/update/:id", async (req, res) => {

        // UI THEKE UPDATE

        console.log(req.body)
        console.log(req.params.id)
        const collection = db.collection("students");
        const filter = { _id: new ObjectId(req.params.id) }
        const update = { $set: req.body }
        const result = await collection.updateOne(filter, update)
        if (result) {
            res.send("data updated")
        } else {
            res.send("data not updated");
        }
    })


    app.put("/update/:id", async (req, res) => {

        // API THEKE UPDATE

        console.log(req.body)
        console.log(req.params.id)
        const collection = db.collection("students");
        const filter = { _id: new ObjectId(req.params.id) }
        const update = { $set: req.body }
        const result = await collection.updateOne(filter, update)
        if (result) {
            res.send({Message : "Data Updated", Success : true, result: result})
        } else {
            res.send({Message : "Data Not Updated", Success : false, result: result});
        }
    })


})


app.listen(4004)