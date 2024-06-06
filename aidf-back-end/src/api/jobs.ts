import express from "express";
import { createJobs, getJobById, getJobs, } from "../application/features/jobs";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const jobsRouter = express.Router();

jobsRouter.route("/").post(ClerkExpressRequireAuth({}), createJobs).get(getJobs)

jobsRouter.route("/:id").get(ClerkExpressRequireAuth({}), getJobById) 

export default jobsRouter;