import express from "express";
import { createJobApplications, getJobApplications, getJobApplicationById } from "../application/features/jobApplication";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const jobApplicationsRouter = express.Router();

jobApplicationsRouter
.route("/")
.post(ClerkExpressRequireAuth({}), createJobApplications)
.get(ClerkExpressRequireAuth({}), getJobApplications);

jobApplicationsRouter.route("/:id").get(ClerkExpressRequireAuth({}), getJobApplicationById)

export default jobApplicationsRouter;