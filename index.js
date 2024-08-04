const express = require("express")
const mongoose = require("mongoose")
const app = express();


mongoose.connect("mongodb+srv://Thivakar2004:admin@cluster0.hpgbrg8.mongodb.net/demo");
const userSchema = new mongoose.Schema({
    name:String,
    College:String,
    age:Number
})

const userModel = mongoose.model("Student", userSchema);
const student1 = new userModel({
    name:"Thivakar",
    Collage:"Hindusthan",
    age:19
})



student1.save();
app.listen("2000",()=>{
    console.log("DB connected");
})




