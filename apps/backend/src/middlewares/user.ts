import { reqresTypes } from "../types/userTypes"
import { db } from "../db/db"


// getting user
export const checkUserExisi = async ({req,res, next}:reqresTypes) => {
    const id:string = req.params.id as string;
    const email:string = req.body.email
    try {
        const user = await db.user.findUnique({
            where:{ 
                id: id, 
                email:email
            },  
        });

        if (user) {
            return res.status(409).json({"User details":user});
        }

        res.status(404).json({"User not found: ": id})
        
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({"error": error})
    }
    next()
}
