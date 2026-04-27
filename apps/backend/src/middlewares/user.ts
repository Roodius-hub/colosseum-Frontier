import { reqresTypes } from "../types/userTypes"
import { db } from "../db/db"
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
// console.log(process.env.NEXTAUTH_SECRET)

// middleware
export const checkUserExisi = async ({req,res, next}:reqresTypes) => {

    try {
        const token = req.cookies["next-auth.session-token"] ||
                      req.cookies["__Secure-next-auth.session-token"];
        if (!token) {
            return res.status(401).json({message: "Unautherized !"});
        }

        // verfify 
        const { payload } = await jwtVerify(token, secret);

        req.user = {
            id: payload.sub,  //user.id
            email: payload.email,
        };

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "Invalid token"})
    }
    
}
