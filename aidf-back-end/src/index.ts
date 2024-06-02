import 'dotenv/config';
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./persistance/db";

const app = express();
app.use(express.json());

connectDB();

app.use("/jobs",jobsRouter);

app.listen(8000, () => console.log("Server is listening on port 8000."));
