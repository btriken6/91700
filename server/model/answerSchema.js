const mongoose = require('mongoose')
const answerSchema = new mongoose.Schema({
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: postSchema
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: userSchema
    },
    dateCreated:{
        type:Date,
        default: Date.now()
    }
})
const Answer=mongoose.model('ANSWER',answerSchema)
module.exports=Answer