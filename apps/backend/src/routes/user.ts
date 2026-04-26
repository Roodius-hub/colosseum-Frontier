import express from "express";
import { getUser, updateUser } from "../controllers/userController";
import { checkUserExisi } from "../middlewares/user";

const router = express.Router();

//get
router.get("/users/:id", checkUserExisi ,getUser);


//update
router.patch("/users/:id",checkUserExisi ,updateUser );

export default router;

