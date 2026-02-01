import express from "express";
import clientController from "../controller/client.controller.js";

const clientRouter = express.Router();

clientRouter.get("/programs",clientController.getAllPrograms);
clientRouter.get("/programs/:id",clientController.getProgramById);
// this Route is used at the ENROLL-In and Enroll_out Of any Program 
clientRouter.patch("/program/:id/enroll",clientController.enrollIntoProgram);
// clientRouter.get("/program/my-programs",clientController.enrollIntoProgram);

export { clientRouter };