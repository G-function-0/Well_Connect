import express from "express";
import * as trainerController from "../controller/trainer.controller.js";


const trainerRouter = express.Router();


trainerRouter.post("/add-program",trainerController.addProgram);
trainerRouter.get("/programs",trainerController.getAllProgram);
trainerRouter.get("/programs/:id",trainerController.getProgramById);
trainerRouter.patch("/programs/:id/publish",trainerController.publishProgram);


export {trainerRouter};