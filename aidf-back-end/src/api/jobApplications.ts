import express from "express";
import { createJobApplications, getJobApplications, getJobApplicationById } from "../application/features/jobApplication";

const jobApplicationsRouter = express.Router();

jobApplicationsRouter.route("/").post(createJobApplications).get(getJobApplications);

jobApplicationsRouter.route("/:id").get(getJobApplicationById)

export default jobApplicationsRouter;