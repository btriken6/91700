const mongoose=require('mongoose')
const subjectSchema= new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    }
})

const Subject=mongoose.model('SUBJECT',subjectSchema)
module.exports=Subject