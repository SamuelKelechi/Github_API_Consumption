const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const NewData = require('./schema')

router.get('/',async(req,res)=>{
    const newdata =await NewData.find()
    res.status(200).json(newdata)
})



router.post("/",async(req,res)=>{
    const newfile =await NewData.create(req.body)
    res.status(200).json(newfile) 
   
})
module.exports= router