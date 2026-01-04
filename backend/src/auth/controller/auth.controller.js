import { config } from "../../config/index.js";
import { UserModel } from "../../models/User.js";
import { sendError } from "../../utils/sendError.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = async (req,res) => {
    const payload = req.body;
    if(!payload.email || !payload.name || !payload.password){
        return sendError(res,400,"Email, Name and Password are all required");
    }

    const passwordHash = await bcrypt.hash(payload.password,10);

    const user =await UserModel.create({
        "email" : payload.email,
        "password" : passwordHash,
        "name" : payload.name
    })

    const token = jwt.sign({
        userId : user._id.toString()
    }, config.jwtSecret);
    
    return res.status(200).json({
        success : true,
        message : "User Registered",
        token
    })
}

export default { register }