const express = require('express');
const router = express.Router();
const Movie = require('../model/movies');
const mongoose =require('mongoose');

router.get('/',(req,res,next)=>{
   Movie.find()
   .then(result=>{
       res.status(200).json({
           movieData:result
       });
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
})


router.post('/',(req,res,next)=>{
   const movie =new Movie({
       _id:new mongoose.Types.ObjectId,
       moviename:req.body.moviename,
       actor:req.body.actor,
       actress:req.body.actress,
       director:req.body.director,
       yearofrelease:req.body.yearofrelease


   })
   movie.save()
   .then(result=>{
       console.log(result);
       res.status(200).json({
           newMovie:result
       })
   })
   .catch(error=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
})



module.exports = router;