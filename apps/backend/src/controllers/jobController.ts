import { db } from "../db/db";
import { reqresTypes } from "../types/userTypes";

const createPost  = ({req,res} : reqresTypes) => {
    const { title, description, budget , bids , clientId, client , name } =  req.body;  
    
    try {
        const res = await db.job.create({
            data: {
                title: ,
                description: ,
                budget: ,
                bids: ,
                clientId:,
                client:
            }
        })
    }
}
