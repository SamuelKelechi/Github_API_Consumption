const express = require('express')
const mongoose = require('mongoose')
const PORT = 2323
const server = express()
const cors = require("cors")
const lab = require("./router")
const url = "mongodb://localhost/Teamdb"

mongoose.connect(url,{useNewUrlParser: true})

const con = mongoose.connection

con.on("open", () => {
    console.log("am on")
})

server.use(cors())
server.use(express.json())
server.use("/",lab)

server.listen(PORT, () => {
    console.log(`App is running on Port:${PORT}`)
})