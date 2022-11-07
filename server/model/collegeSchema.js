const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String
    },
    location: {
        type: String
    },
    pin: {
        type: Number
    },
    subjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: subjectSchema
        }
    ],
    adminId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: userSchema
    }
}) 
const College=mongoose.model('COLLEGE',collegeSchema)
module.exports=College 