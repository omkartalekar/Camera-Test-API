import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

import Routes from './routes/route.js';
import Connection from './database/db.js';

dotenv.config();

// Create an Express app
const app = express();

const PORT = process.env.PORT || 3000;


// Connect to the MongoDB database

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);


// Set up middleware


app.use(bodyParser.json({ extended: true })); // Parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


