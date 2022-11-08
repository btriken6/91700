const mongoose = require('mongoose')
// const Subject=require('./subjectSchema')
// const User=require('./userSchema')
// const Answer=require('./answerSchema')
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    isPublic:{
        type:Boolean,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },
    answers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Answer"
        }
    ],
    report:{
        type:Number
    },
    
}, {timestamps:true})
const Post=mongoose.model('POST',postSchema)
module.exports=Post