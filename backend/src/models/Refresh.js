import mongoose from "mongoose";

const refreshSchema = new mongoose.Schema(
    {
        refreshToken : {
            type : String,
            required : true,
            unique : true
        },
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },
        createdAt : {
            type :Date,
            default : Date.now(),
            expires : '7d'
        }
    },
    {
        timestamps : true
    }
)
const RefreshModel = mongoose.model("Refresh",refreshSchema);
export {RefreshModel};