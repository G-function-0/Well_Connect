import { config } from "../../config/index.js";
import { RefreshModel } from "../../models/Refresh.js";
import { UserModel } from "../../models/User.js";
import { generateRefreshToken } from "../../refresh/refresh.services.js";
import { sendError } from "../../utils/sendError.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = async (req,res) => {
    const payload = req.body;
    if(!payload.email || !payload.name || !payload.password){
        return sendError(res,400,"Email, Name and Password are all required");
    }

    const existingUser = await UserModel.findOne({
        email : payload.email
    })

    if(existingUser){
        return sendError(res,409,"Email already resgistered")
    }

    const passwordHash = await bcrypt.hash(payload.password,10);

    const user =await UserModel.create({
        "email" : payload.email,
        "password" : passwordHash,
        "name" : payload.name
    })
    const refreshToken = generateRefreshToken();

    await RefreshModel.create({
        refreshToken,
        userId : user._id
    })

    const token = jwt.sign({
        userId : user._id
    }, config.jwtSecret,
    {expiresIn : config.expiresIn});

    return res.status(201).json({
        success : true,
        message : "User Registered",
        token,
        refreshToken,
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
    const isMatched  =await bcrypt.compare(payload.password,user.password);
    if(!isMatched){
        return sendError(res,401,"Invalid Credentials");
    }
    
    const token = jwt.sign({userId : user._id},config.jwtSecret,{expiresIn : config.expiresIn});
    const refreshToken = generateRefreshToken();

    await RefreshModel.create({
        refreshToken,
        userId : user._id
    })
    return res.status(200).json({
        success : true,
        message : "Logged In",
        token,
        refreshToken
    })
}

const refresh = async (req,res)=> {
    const {refreshToken } = req.body;
    if(!refreshToken){
        return sendError(res,403,"Logged Out");
    }

    const details =await RefreshModel.findOne({
        refreshToken
    })

    if(!details) {
        return sendError(res,403,"Logged Out")
    }

    const token = jwt.sign({ userId : details.userId},config.jwtSecret,{expiresIn : config.expiresIn});

    return res.status(200).json({
        success : true,
        message : "Services Refreshed",
        token
    })

    
}
export default { register , login, refresh }