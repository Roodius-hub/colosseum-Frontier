import app  from "./index.js";
import env from "dotenv";
env.config();


const port = process.env.PORT;
app.listen(port, () => console.log(`server Running on port ${port}`))