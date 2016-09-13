var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/album');

/* GET home page. */
router.get('/', function(req, res, next) {
  Album.find({},function(err, photos){
    if (err){
      console.log(err);
      res.json({status:"Failure"})
      }
    else{
          console.log(photos)  
          res.json(photos);
        }
  });
});

router.post('/save', function(req, res, next) {
  var newPhoto = new Album(req.body)
  newPhoto.save(function (err) {
      if (err) {
        console.log(err)
        res.json({status:"Failure"})
      }
      else res.json({status:"Success"});
  });
});

//para remover, poderia ter usado .delete, mas preferi usar o get.
router.get('/delete:id', function(req, res, next) {
  var id = req.params.id;
  Album.remove({_id: id},function(err, ok){
    if (err) {
      console.log(err)
      res.json({status:"Failure"});
    }
    else res.json({status:"Success"});
  })
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

