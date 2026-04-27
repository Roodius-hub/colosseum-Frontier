import { reqresTypes } from "../types/userTypes"
import { db } from "../db/db"
import { jwtVerify } from "jose";
import { NextFunction } from "express";
import type { Request, Response } from "express";
import { getToken } from "next-auth/jwt"

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
// console.log(process.env.NEXTAUTH_SECRET)

// middleware
export const checkUserExisi = async (req:Request,res:Response,next:NextFunction) => {
    const token = await getToken({
        req,
        secret:process.env.NEXTAUTH_SECRET
    })

        // const token = req.cookies["next-auth.session-token"] ||
        //               req.cookies["__Secure-next-auth.session-token"] ||
        //               req.cookies["__Host-next-auth.session-token"]; 
        console.log(token)
        if (!token) {
            return res.status(401).json({message: "Unautherized !"});
        }

        // verfify 
        // const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET));

        req.user = {
            id: token.sub as string,  //user.id
        };

        next();   
}
