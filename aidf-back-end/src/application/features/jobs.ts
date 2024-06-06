import { NextFunction, Request,Response } from "express";
import Job from "../../persistance/entities/jobs";



export const getJobs = async(req:Request,res:Response, next:NextFunction) => {
    try{
        const jobs = await Job.find();
        return res.status(201).json(jobs);
    }catch(error){
       next(error);
    }
};

export const createJobs = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const job = req.body;
        
        await Job.create(job)

        return res.status(200).send();
    }catch(error){
        next(error);
    }
};


export const getJobById = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const {id} = req.params;     
        const job = await Job.findById(id)
        return res.status(200).json(job);
    }catch(error){
        next(error);
    }
};