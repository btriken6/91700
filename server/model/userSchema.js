const mongoose=require('mongoose')
// const College=require('./collegeSchema')
// const Image=require('./image.model')
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
        ref: "College"
    },
    idProofPhoto:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Image"
    },

    type:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const User=mongoose.model('USER',userSchema)
module.exports=User