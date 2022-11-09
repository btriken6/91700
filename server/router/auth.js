const express = require('express')
const multer = require('multer')
const User = require('../model/userSchema')

const router = express.Router()

//middleware
const middleware = ((req, res, next) => {
    console.log("hello middleware")
    next()
})

router.use(express.static(__dirname+"./public"))

const Storage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('idPhoto')


router.post('/register',upload, async (req, res) => {
    console.log("hello")
    const userData=new User({
        name:req.body.name,
        email:req.body.email,
        
        idProofPhoto:req.file.filename
    })
    const saveData=await userData.save()
    console.log(saveData)
    res.send(saveData)
})

module.exports = router