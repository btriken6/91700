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
    ]
})