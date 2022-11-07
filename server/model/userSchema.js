const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    identificationNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    cPassword:{
        type:String,
        required:true
    },
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: collegeSchema
    },
    idProofPhoto:{
        type:String,
        required:true
    },

    type:{
        type:String
    },
    verifyUser:{
        type:Number,
        default:0
    }
})

const User=mongoose.model('USER',userSchema)
module.exports=User