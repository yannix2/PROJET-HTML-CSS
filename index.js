//Import high level packages
const express = require('express')
const mongoose = require('mongoose')
const app=express()

const cors = require('cors');
app.use(cors());
//database connection   
mongoose.connect('mongodb://localhost:27017/Covoiturage')
mongoose.connection.on('connected', () => {console.log('Connection established')})
mongoose.connection.off('error',(err)=>{console.log('Connection failed with ',err)})

const authRoutes=require("./routes/auth.routes")
const prodRoutes=require("./routes/produit.routes")
const facRoutes=require("./routes/factures.routes")




//middelwares

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('views','./views')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))

//routesMiddelwares
app.get('/',(req, res) =>{
    res.render('landing')
})
app.use('/auth',authRoutes)
app.use('/work',prodRoutes)
app.use('/facture',facRoutes)
//SERVER LISTENING

const port = 8000
app.listen(port,()=>{
    console.log("Server listening mrigel")
})