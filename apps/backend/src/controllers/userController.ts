import { reqresTypes } from "../types/userTypes"
import { db } from "../db/db"


// getting user
export const getUser = async ({req,res}:reqresTypes) => {
    const id:string = req.params.id as string;

    try {
        const user = await db.user.findUnique({
            where:{ 
                id: id
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
}

// update user 
export const updateUser = async ({req, res}:reqresTypes) => {
    const id:string = req.params.id as string;
    const name:string = req.body.name;
    const email:string = req.body.email;
    const userskill = req.body.userskill; 

    try {
        const response = await db.user.update({
            where:{
                id:id,
                email:email
            }, 
            data:{
                name:name,
                email:email,
                userSkill:userskill,
            }
        })

        if(response) {
            return res.status(200).json({"User updated Successfully": response})
        }

        res.status(400).json({"User not Exist": email});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({"error": error})
    }

}