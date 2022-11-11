const dotenv=require("dotenv")
const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const multer=require('multer')
// const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(require('./router/auth'))

const port = process.env.PORT

const User=require('./model/userSchema')
const College=require('./model/collegeSchema')
const Subject=require('./model/subjectSchema')
const Post=require('./model/postSchema')
const Answer=require('./model/answerSchema')

app.listen(port, () => {
    console.log("started the server");
})


