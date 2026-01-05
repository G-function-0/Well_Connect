import mongoose from "mongoose"


const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            trim : true,
            unique : true,
            lowercase : true,
        },
        name : {
            type : String,
            required : true,

        },
        password : {
            type : String,
            required : true,
            trim : true,
        },
        role : {
            type: String,
            enum : ["admin","trainer","client"],
            required : true,
            default : "client"
        },
        
    },
    {
         timestamps: true,
    }
)

const UserModel = mongoose.model("User",userSchema);

export {UserModel};