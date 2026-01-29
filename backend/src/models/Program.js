import mongoose from "mongoose"


const programSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : { 
        type : String,

    },
    category : {
        type:  String,
        enum : ["yoga","gym","zumba","streching","other","calisthenics"],
        default : "other"
    },
    level : {
        type: String,
        enum : ["beginner","intermediate","advanced"],
        default : "beginner"
    },
    price : {
        type : Number,
        required :  true,
    },
    totalWeeks : {
        type : Number,
    },
    sessionsPerWeek : {
        type:  Number,
        required : true,
    },
    sessionDurationMinutes : {
        type : Number,
        required : true
    },
    isPublished : {
        type :Boolean,
        default :  false,
    },
    trainerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
},
    {   
        timestamps : true,
    });
programSchema.index({ trainerId : 1 });
programSchema.index({ title : "text" });

const ProgramModel =  mongoose.model("Program",programSchema);

export { ProgramModel };