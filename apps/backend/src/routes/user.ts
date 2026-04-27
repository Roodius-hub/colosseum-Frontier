import express from "express";
import { CreateSkill, getUser, updateUser, UserAddress } from "../controllers/userController";
import { checkUserExisi } from "../middlewares/user";

const router = express.Router();

//get
router.get("/users/:id", checkUserExisi ,getUser);


//update
router.patch("/users/:id",checkUserExisi ,updateUser );


// address 
router.post("/user/address", checkUserExisi , UserAddress);

// skills
router.post("/users/skills", checkUserExisi, CreateSkill);

export default router;

