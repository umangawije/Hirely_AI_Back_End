import express from "express";
import { createJobs, getJobs } from "../application/features/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getJobs).post(createJobs)

export default jobsRouter;