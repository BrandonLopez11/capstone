import express from 'express';
import cors from 'cors';
import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// APP Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database
// connectDB();
mongoose
    .connect("mongodb+srv://lopez97bl:<password>@blopez.8aogk.mongodb.net/?retryWrites=true&w=majority&appName=BLopez")
    .then(() => {
        console.log("database is working")
    }).catch((err) =>{
        console.log("connection error: database123", err)
    })

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.get('/', (req, res) => {
    res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT : `+ port));