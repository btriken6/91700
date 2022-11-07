const mongoose = require('mongoose')
const Subject=require('./subjectSchema')
const User=require('./userSchema')
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
            ref: "Subject"
        }
    ],
    adminId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}) 
const College=mongoose.model('COLLEGE',collegeSchema)
module.exports=College 