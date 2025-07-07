import express from 'express'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js';

const app = express();

dotenv.config({ path: "backend/config/config.env" });

//connection to database
connectDatabase();


//routes

const server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})