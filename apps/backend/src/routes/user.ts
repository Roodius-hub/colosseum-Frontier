import express from "express";
import { CreateSkill, getUser, updateUser, UserAddress } from "../controllers/userController";
import { checkUserExisi } from "../middlewares/user";

const router = express.Router();

//get
router.post("/get", checkUserExisi ,getUser);


//update
router.patch("/update/:id",checkUserExisi ,updateUser );


// address 
router.post("/address", checkUserExisi , UserAddress);

// skills
router.post("/skills", checkUserExisi, CreateSkill);

export default router;

