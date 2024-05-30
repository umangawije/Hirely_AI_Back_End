import { NextFunction, Request,Response } from "express";

export const getJobs = async(req:Request,res:Response) => {
    try{
        return res.status(200).send();
    }catch(error){
        return res.status(500).send();
    }
};

export const createJobs = async(req:Request,res:Response) => {
    try{
        return res.status(200).send();
    }catch(error){
        return res.status(500).send();
    }
};