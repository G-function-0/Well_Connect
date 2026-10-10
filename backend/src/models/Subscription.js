import mongoose, { mongo }  from "mongoose";

const subscriptionSchema =  new mongoose.Schema({
    programId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Program',
        required : true        
    },
    clientId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    status : {
        type : String,
        enum : ["active","compleated","cancelled"],
        default : "active"
    }
},{ timestamps : true})

const SubscriptionModel = mongoose.model("Subscription",subscriptionSchema);

export { SubscriptionModel };