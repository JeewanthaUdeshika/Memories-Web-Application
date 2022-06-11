// we can use import keyword other than using require keyword by adding "type":"module" to package.json file
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

// Getting class from  the  posts
import postRoutes from "./routes/posts.js";

// Getting started with creating a object
const app = express();

// Start the all the post routes with the /post
app.use('/posts', postRoutes);

// use() is used to mount middleware function (function that has access to req obj and res obj)
app.use(bodyParser.json({limit: "30mb", extended: true}));      // Make limits to buffer data
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));      // Make limits to url encoded data
app.use(cors());

const CONNECT_URL = 'mongodb+srv://juaghost:juaghost@cluster0.qsvvems.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

// connect mongoDBB using mongoose
mongoose.connect(CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, ()=>{console.log(`Server running on port: ${PORT}`)}))
        .catch((error)=>{console.log(error.message)});

/////