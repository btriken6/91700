const express = require('express')
const multer = require('multer')
const User = require('../model/userSchema')

const router = express.Router()

//middleware
const middleware = ((req, res, next) => {
    console.log("hello middleware")
    next()
})

router.use(express.static(__dirname + "./public"))

const Storage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]

const maxSize = 1 * 1024 * 1024

const upload = multer({
    storage: Storage,
    fileFilter: (req, file, cb) => {
        if (whitelist.includes(file.mimetype)) {
            cb(null, true);
            //   return typeError=true
        } else {
            cb(null, false)
            return cb(new Error("Only png and jpg format allowed"))
            //   return typeError=false
        }
    },
    limits: { fileSize: maxSize }

}).single('idPhoto')


router.post('/register',(req, res) => {
    try {
        upload(req, res,async function (err) {
            if(err instanceof multer.MulterError){
                console.log("1",err.message)
                res.send({ message: err.message })
            }
            else if (err) {
                console.log("2",err.message)
                res.send({ message: err.message })
            }
            else{
                if(!req.file?.filename || !req.body.name || !req.body.email || !req.body.identificationNumber|| !req.body.password|| !req.body.phone|| !req.body.collegeId|| !req.body.userType) {
                    res.status(422).json({message:"Please fill all the required fields"})
                }
                else{
                    const userData = new User({
                        name: req.body.name,
                        email: req.body.email,
                        identificationNumber: req.body.identificationNumber,
                        password: req.body.password,
                        phone: req.body.phone,
                        collegeId: req.body.collegeId,
                        idProofPhoto: req.file.filename,
                        userType: req.body.userType
                    })
            
                    const saveData = await userData.save()
                    console.log(saveData)
                    res.send(saveData)
                }
                
            }
        })
        

    } catch (error) {
        console.log("error", error.message)
    }
})

module.exports = router