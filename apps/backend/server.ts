import { app } from "./src/app";

const port = process.env.PORT;
// console.log(port)

app.listen(port, () => console.log(`server running on port => ${port}`));
