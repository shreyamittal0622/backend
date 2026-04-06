/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";


import express from "express"
const app= express ()
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port${process.env.PORT}`);
        })

    }catch(error){
        console.error("ERROR:", error)
        throw err
    }
})()
    */




// require('dotenv').config({path: './env'})
/*
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()


.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
}) */

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';

// 1. THIS MUST BE THE VERY FIRST THING THAT RUNS
dotenv.config({
    path: './.env'
});

// 2. Wrap the execution in a way that ensures config is loaded
const startServer = async () => {
    try {
        await connectDB(); // Wait for DB to connect
        
        app.listen(process.env.PORT || 8000, () => {
            console.log(`\n⚙️  Server is running at port : ${process.env.PORT}`);
        });
    } catch (err) {
        console.log("MONGO db connection failed !!! ", err);
    }
};

startServer();