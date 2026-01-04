import mongoose from "mongoose";
import { config } from "../config/index.js";

export async function connectDB() {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDb connection is established");
}