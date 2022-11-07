const mongoose=require('mongoose')
const subjectSchema= new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:string
    }
})