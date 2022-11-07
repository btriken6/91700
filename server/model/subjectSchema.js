const mongoose=require('mongoose')
const subjectSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:collegeSchema
    }
})

const Subject=mongoose.model('SUBJECT',subjectSchema)
module.exports=Subject