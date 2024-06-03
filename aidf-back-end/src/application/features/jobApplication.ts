import { NextFunction, Request,Response } from "express";
import JobApplication from "../../persistance/entities/jobApplications";

export const createJobApplications = async(req:Request,res:Response) => {
    try{
        const jobApplication = req.body;
        await JobApplication.create(jobApplication)
        return res.status(200).send();
    }catch(error){
        console.log(error)
        return res.status(500).send();
    }
};

export const getJobApplications = async(req:Request, res:Response) => {
    try{
        const jobApplications = await JobApplication.find().populate("job");  //get job applications with details of the job
        return res.status(200).json(jobApplications);

    }catch(error){
        return res.status(500).send();
    }
}

export const getJobApplicationById = async(req:Request,res:Response) => {
    try{
       
        const {id} = req.params;
       
        const jobApplication = await JobApplication.findById(id);

        return res.status(200).json(jobApplication); 
    }catch(error){
        return res.status(500).send();  
    }
}



