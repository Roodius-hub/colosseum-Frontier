import type { NextFunction, Request, Response } from "express";

export interface reqresTypes {
    req:Request,
    res:Response, 
    next:NextFunction
}