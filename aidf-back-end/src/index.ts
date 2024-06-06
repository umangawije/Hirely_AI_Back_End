import 'dotenv/config';
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./persistance/db";
import jobApplicationsRouter from './api/jobApplications';
import cors from "cors"
import GlobalErrorHandlerMiddleware from './api/middleware/global-error-handling-middleware';

const app = express();
app.use(express.json());
app.use(cors()); //allow any url from frontend to call API

connectDB();

app.use("/jobs",jobsRouter);
app.use("/jobApplications",jobApplicationsRouter)

app.use(GlobalErrorHandlerMiddleware);

app.listen(8000, () => console.log("Server is listening on port 8000."));
