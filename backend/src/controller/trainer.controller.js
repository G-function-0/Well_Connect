import { ProgramModel } from "../models/Program.js";
import { sendError } from "../utils/sendError.js";


const addProgram = async (req, res) => {
    const { title, description, category, level , price, totalWeeks, sessionsPerWeek, sessionDurationMinutes, isPublished, trainerId } = req.body;

    if(!title || !price || !sessionsPerWeek || !sessionDurationMinutes || !trainerId){
        return sendError(res,400,"* feilds are required");
    }
    const duplicateTitleCheck = await ProgramModel.findOne({
        trainerId,
        title :  { $regex :  new RegExp(`^${title}$`,'i') }
    }).select("_id");
    if(duplicateTitleCheck){
        return sendError(res,400,"Program already exists");
    }

    await ProgramModel.insertOne({
        title, 
        description,
        category,
          level ,
           price,
            totalWeeks,
             sessionsPerWeek,
              sessionDurationMinutes,
               isPublished,
                trainerId
         
    })

    res.status(201).json({
        success : true,
        message : "Program Created"
    })
}

const getAllProgram = async (req,res) => {
    const { trainerId } = req.body;
    const allPrograms = await ProgramModel.find({
        trainerId
    })

    if(!allPrograms){
        return sendError(res,404,"No Programs Created Yet!")
    }
    return res.status(200).json({
        success : true,
        message : "all the programs",
        allPrograms,
    })
}

const getProgramById = async (req,res) => {
    const { programId } = req.params.id;
    const program = await ProgramModel.findOne({
        programId
    })

    if(!program){
        return sendError(res,404,"Program Not Found");
    }

    return res.status(200).json({
        success : true,
        message : "Program Details",
        program
    })
}

const publishProgram = async (req,res) =>{
    const programId = req.params.id;
    const { trainerId } = req.body;
    const program = await ProgramModel.findOne({
            trainerId,
            _id : programId
        }
    );
    if(!programId || !trainerId){
        return sendError(res,404,"Not found ")
    }

    program.isPublished = !program.isPublished;
    await program.save();

    return res.status(200).json({
        success : true,
        message : "Program Updated",
        isPublished : program.isPublished
    })
    
}

export { addProgram, getAllProgram, getProgramById, publishProgram }