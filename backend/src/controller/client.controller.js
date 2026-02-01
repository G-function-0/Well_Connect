import { ProgramModel } from "../models/Program.js"

const getAllPrograms = async (req,res) => {
    // later we need to apply pagination here ->>> IMPORTANT
    const allPrograms = await ProgramModel.find({ isPublished : true });

    return res.status(200).json({
        success : true,
        message : "All Courses Published",
        allPrograms
    })
}

const getProgramById = async (req,res) => {
    const id = req.params.id;
    
    const program  = await ProgramModel.findOne({id});

    if(!program) {
        return sendError(res,404,"Program Not Found");
    }

    return res.status(200).json({
        success : true,
        message : "Program Found",
        program,
    })
}


const enrollIntoProgram = async(req,res)=> {
    const id = req.params.id;

    const program = await ProgramModel.findOne({id});
    
    if(!program){
        return sendError(res,404,"ProgramNot found ")
    }
    program.isPublished = !program.isPublished;
    await program.save();

    return res.status(200).json({
        success : true,
        message : "Enrolled into Program",
    }) 

}

export default { getAllPrograms, getProgramById, enrollIntoProgram};