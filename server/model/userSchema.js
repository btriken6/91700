const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    identificationNumber:{
        type:String,
        default:""
    },
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:collegeSchema
    },
    idProofPhoto:{
        type:String
    },

    type:{
        type:String
    },
    verifyUser:{
        type:Number,
        default:0
    }
})