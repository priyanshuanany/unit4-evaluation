const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect = () =>{
    mongoose.connect(" mongodb://127.0.0.1:27017/bank");
};

const user = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    age: Number,
    email: String,
    address: String,
    gender: String,
    type: String,
    createdAt : Date,
    updatedAt : Date
});

const branch = ({
    name: String,
    address : String,
    IFSC : String,
    MICR : Number,
    createdAt : Date,
    updatedAt : Date
});

const masterac = ({
    balance : Number,
    createdAt : Date,
    updatedAt : Date
});

const savingac = ({
    account_number : Number,
    balance : Number,
    interestRate : Number,
    createdAt : Date,
    updatedAt : Date
});

const fixedac = ({
    account_number : Number,
    balance : Number,
    interestRate : Number,
    startDate : Date,
    maturityDate : Date,
    createdAt : Date,
    updatedAt : Date
});

const User = mongoose.model("users", user);
const Branch = mongoose.model("branchs", branch);
const Masterac = mongoose.model("masteracs", masterac);
const Savingac = mongoose.model("savingacs", savingac);
const Fixedac = mongoose.model("fixedacs", fixedac);

app.get("/users",(req,res) => {
    console.log(user);
})

app.get("/")

app.listen(5500, async() =>{
    try{
        await connect();
    }
    catch{
        console.log("something went wrong");
    }
    console.log("listening port 5500");
});