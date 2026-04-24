import { reqresTypes } from "../types/userTypes"
import { db } from "../db/db"

export const signup = async ({req,res, next}:reqresTypes) => {
    const name:string = req.body.name;
    const email:string = req.body.email;
    const image:string = req.body.image;
    const googleid:string = req.body.googleid
    try {
        const user = await db.user.findUnique({
            where:{
                googleId: googleid
            },  
        });

        if (!user) {
            
        }
    }

}