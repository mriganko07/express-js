// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const studentschema = mongoose.Schema({name: String, age : Number, email: String, mobile: Number});

export default studentschema;