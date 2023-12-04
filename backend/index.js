import "dotenv/config";
import "./database/Connectdb.js";
import express from "express";
import authRouter from './routes/Auth.route.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('http://localhost:' + PORT))