var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(response) // Print the google web page.
        res.send(response);
     }
  })
});

module.exports = router;
