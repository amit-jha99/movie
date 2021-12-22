const mongoose =require('mongoose');

const moviesSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    moviename:String,
    actor:String,
    actress:String,
    director:String,
    yearofrelease:Number
})
module.exports =mongoose.model('Movies',moviesSchema)