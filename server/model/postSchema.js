const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    postType:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userSchema
    },
    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:subjectSchema
    },
    answers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:answerSchema
        }
    ],
    dateCreated:{
        type:Date,
        default: Date.now()
    }
})
const Post=mongoose.model('POST',postSchema)
module.exports=Post