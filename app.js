const express = require('express');
const app = express();

const movieRoute =require('./api/routes/movies')
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
mongoose.connect('mongodb://localhost:27017/movieDatabase');
// mongoose.connection.once('open',function(){

// })






mongoose.connection.once('open',function(){
    console.log('connection has been made');
}).on('error',function(error){
    console.log('error is:',error);
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/movies',movieRoute)

app.use((req,res,next)=>{
    res.status(404).json({
        error:"url not found"
    })
})

app.use((req,res,next)=>{
    res.status(200).json({
        message:'app is running'
    })
})

module.exports = app;