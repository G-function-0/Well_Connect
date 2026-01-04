import express from "express";
const authRouter = express.Router();
import authContoller from "../auth/controller/auth.controller.js"


authRouter.post("/register", authContoller.register);
authRouter.post("/login", authContoller.login)
export default authRouter;