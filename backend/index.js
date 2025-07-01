import express from 'express'
import dotenv from 'dotenv'
import itemRoutes from './routes/itemRoutes.js'
import { connectDatabase } from './config/dbConnect.js';

const app = express();

dotenv.config({ path: "backend/config/config.env" })

//connect to databse
connectDatabase();

app.use(express.json());

//routes
app.use("/api/v1/", itemRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})