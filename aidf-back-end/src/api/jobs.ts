import express from "express";
import { createJobs, getJobs, getOneJob } from "../application/features/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getJobs).post(createJobs)

jobsRouter.route("/:id").get(getOneJob)

export default jobsRouter;