const mongoose=require('mongoose')
// const College=require('./collegeSchema')
const subjectSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const Subject=mongoose.model('SUBJECT',subjectSchema)
module.exports=Subject