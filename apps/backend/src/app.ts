import express from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";

import  userRouter  from "./routes/user"
export const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());


// app.use("/", (req , res) => {
//   return res.send("server Running on port 3000")
// })
app.use(cookieParser());
app.use("/user", userRouter);

// app.use("/jobs")