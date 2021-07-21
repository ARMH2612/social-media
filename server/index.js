import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import mongodb from 'mongodb';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

// connection to the database :
// const MongoClient = mongodb.MongoClient
// const connectionURL = "mongodb://localhost"
// const databaseName = 'socialMedia'

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) => {
//     if (error){
//         return console.log('Unable to connect to DB :\n'+error);
//     }
//     console.log("Connected successfully!!!");
// })
