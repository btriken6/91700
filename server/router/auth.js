const express = require('express')
const multer = require('multer')

const router = express.Router()
// const User=require('../model/userSchema')
// const College=require('../model/collegeSchema')
// const Subject=require('../model/subjectSchema')
// const Post=require('../model/postSchema')
// const Answer=require('../model/answerSchema')
const Image=require('../model/image.model')

//middleware
const middleware = ((req, res, next) => {
    console.log("hello middleware")
    next()
})

const Storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('idPhoto')

router.get('/', async (req, res) => {
    res.send("hello")
})
router.get('/about', middleware, async (req, res) => {
    res.send("about111111111")

})

router.post('/register', async (req, res) => {
    console.log("hello")
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newImage = new Image({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save()
            .then(()=>{
                res.send('successfully uploaded')
            })
            .catch(()=>{
                console.log(err)
            })
        }
    })

})

module.exports = router