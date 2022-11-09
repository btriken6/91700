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
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "College",
        required:true
    },
    idProofPhoto:{
        type:String,
        required:true
    },

    type:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const User=mongoose.model('USER',userSchema)
module.exports=User