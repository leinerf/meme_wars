var express = require('express');
var router = express.Router();
var Meme = require('../models/meme');

router.get('/',function(req, res){

    Meme.find({},function(err,memes){
        res.render('index',{memes:memes});
    });

});
router.get('/:id',function(req, res){
    console.log('id functinon called');
    Meme.findById(req.params.id,function(err,meme){
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            meme.likes++;
            meme.save(function(err,updatedMeme,statusCode){
                if(err){
                    console.log(err);
                    res.redirect('back');
                } else {
                    console.log(updatedMeme);
                    res.redirect('back');
                }
            });
        }

    });
});

module.exports  = router;
