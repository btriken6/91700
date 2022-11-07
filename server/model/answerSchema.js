const mongoose = require('mongoose')
const User = require('./userSchema')
const Post=require("./postSchema")
const answerSchema = new mongoose.Schema({
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    answer:{
        type:String
    },
    dateCreated:{
        type:Date,
        default: Date.now()
    }
})
const Answer=mongoose.model('ANSWER',answerSchema)
module.exports=Answer