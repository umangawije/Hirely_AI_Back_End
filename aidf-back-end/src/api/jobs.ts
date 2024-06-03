import express from "express";
import { createJobs, getJobById, getJobs, } from "../application/features/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getJobs).post(createJobs)

jobsRouter.route("/:id").get(getJobById) 

export default jobsRouter;