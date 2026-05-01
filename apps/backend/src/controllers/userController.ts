import { reqresTypes } from "../types/userTypes"
import { db } from "../db/db"


// getting user
export const getUser = async ({req,res}:reqresTypes) => {
    const id:string = req.user?.id as string;

    try {
        const user = await db.user.findUnique({
            where:{ 
                id: id, 
            },  
        });

        if (user) {
            return res.status(200).json({"User details":user});
        }

        res.status(404).json({"User not found: ": id})
        
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({"error": error})
    }
}

// update user 
export const updateUser = async ({req, res}:reqresTypes) => {
    const id:string = req.user?.id as string;
    const name:string = req.body.name;
    const email:string = req.body.email; 

    try {
        const response = await db.user.update({
            where:{
                id:id,
            }, 
            data:{
                name:name,
                email:email,
            }
        })

        return res.status(200).json({
            message: "User updated successfully",
            response,
        });

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" });
    }

}


// create address 

export const UserAddress = async ({req , res } :reqresTypes) => {
    const userid = req.user?.id;
    const { city, state, country,  zipCode }  = req.body;

    try {
        const address = db.address.upsert({
            where: {
                userId:userid
            }, 
            update:{
                city, 
                state,
                country, 
                zipCode,
            },
            create:{
                city, 
                state,
                country,
                zipCode,
                user:{
                    connect:{id: userid}
                }
            },
        });

        return res.status(200).json({
            message : "Address saved Successfully", 
            address
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Failed to save address",
        });
    }

}


// create skills 
export const CreateSkill =  async ({req,res}: reqresTypes) => {
    const userid = req.user?.id;
    const skills: string[] = req.body.skills;

     console.log(userid);

      if (!userid) {
        return res.status(401).json({ error: "Unauthorized" });
      }

    try {
        const skillRecords = await db.$transaction(
            skills.map((skillName) => {
            return db.skill.upsert({
                where: { name: skillName.toLowerCase() },
                update: {},
                create: { name: skillName.toLowerCase() },
        });
      })
    );

        // userid linked to skills
         await db.$transaction(
      skillRecords.map((skill) =>
        db.userSkill.upsert({
          where: {
            userId_skillId: {
              userId : userid,
              skillId: skill.id,
            },
          },
          update: {},
          create: {
            userId : userid,
            skillId: skill.id,
          },
        })
      )
    );
    
        return res.status(200).json({ message: "Skills updated" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to update skills" });
    }
}