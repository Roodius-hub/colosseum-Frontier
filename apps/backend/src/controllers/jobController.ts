import { db } from "../db/db";
import { jobType } from "../types/jobTypes";
import { reqresTypes } from "../types/userTypes";


//create post
export const createJobs = async ({req,res} : reqresTypes) => {
    const clientid = req.user?.id;
    const { title, description, budget , bids} =  req.body;  
    
    try {
        const response = await db.job.create({
            data: {
                title,
                description,
                budget,
                bids,
                client:{
                    connect:{id:clientid}
                },
            },
        })

        console.log(response);

        return res.status(200).json({message:"Job created !"})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Error"})
    }
}


// update User 
export const updateJob = async ({req, res}:reqresTypes) => {
    const { title, description, budget , bids}:jobType = await req.body;
    const jobId:string = req.params.jobId as string;
    const userid:string = req.user?.id as string;

    try {
        const response = await db.job.update({
            where:{
                id:jobId, 
                clientId:userid
            },
            data: {
                title, 
                description,
                budget,
            }
        })
        console.log(response, "Job updated !");
        return res.status(200).json({message: "Job updated Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error while Updating Job Post"});
    }

}

// delete job 
export const deleteJob = async ({req, res}: reqresTypes) => {
    const jobId = req.params.jobId as string;
    const userid = req.user?.id;

    try {
        const response = await db.job.delete({
            where:{
                id:jobId,
                clientId:userid,
            },
        })
        console.log(response);

        return res.status(200).json({message :"User Deleted successfully"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error While Deleting Post"})
    }
}


// get post 

export  const getJobs= async ({req, res}: reqresTypes) => {
    try {
        const posts = await db.job.findMany({
            include: {
                client:true
            },
            orderBy:{
                createdAt:'desc'
            }
        });
        console.log(posts)
        return res.status(200).json(posts)
    } catch (error) {
        console.log(error);

        return res.status(500).json({message: "Internal Error"})
    }
}