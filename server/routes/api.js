const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://localhost:27017/videolibrary";
mongoose.Promise = global.Promise;

//Connect
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!"+err)
    }
    else{
        console.log("Mongodb Connected")
    }
});

router.get('/', function(req, res){
    res.send('API WORKS');
})

router.get('/videos', function(req, res){
    console.log("Get Request for all videos");

    Video.find({})
         .exec(function(err, videos){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(videos);
             }
         });
});
router.get('/videos/:id', function(req, res){
    console.log("Get Request for a videos");

    Video.findById(req.params.id)
         .exec(function(err, videos){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(videos);
             }
         });
});


module.exports = router;