const express=require('express')
const router=express.Router()
//middleware
const middleware=((req,res,next)=>{
    console.log("hello middleware")
    next()
})

router.get('/',async (req,res)=>{
    res.send("hello")
})
router.get('/about',middleware, async (req,res)=>{
    res.send("about")
    
})
module.exports = router