import express from "express"
import { config } from "./config/index.js";
import { connectDB } from "./db/db.js";
import authRouter from "./routes/auth.routes.js";

await connectDB();

const PORT = config.port;
const app = express();

app.use(express.json());

app.use("/auth",authRouter);




app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})

export {app};