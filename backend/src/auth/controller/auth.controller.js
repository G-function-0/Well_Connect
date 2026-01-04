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
        userId : user._id
    }, config.jwtSecret,
    {expiresIn : config.expiresIn});

    return res.status(200).json({
        success : true,
        message : "User Registered",
        token
    })
}


const login = async (req,res) => {
    const payload = req.body;
    if(!payload.email || !payload.password){
        return sendError(res,400,"Both Email and Password are required");
    }

    
    const user =await UserModel.findOne({email : payload.email});
    if(!user){
        return sendError(res,404,"User Not Found");
    }
    const result  =await bcrypt.compare(payload.password,user.password);
    if(result){
        return sendError(res,400,"Invalid Credentials");
    }
    
    const token = jwt.sign({userId : user._id},config.jwtSecret,{expiresIn : config.expiresIn});

    return res.status(200).json({
        success : true,
        message : "Logged In",
        token
    })
}
export default { register , login }