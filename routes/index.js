var express = require('express');
var router = express.Router();
var http = require('http');
var ig = require('instagram-node').instagram();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

ig.use({
  client_id: 'de0ab1987abb466096f18c0d61e3e5a1',
  client_secret: '595362be28664f6c9f6f122cc3bb01f7'
});
 
var redirect_uri = 'http://localhost:5000/';
 
exports.authorize_user = function(req, res) {
  res.redirect(ig.get_authorization_url(redirect_uri, {}));
};
 
exports.handleauth = function(req, res) {
  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};
 
// This is where you would initially send users to authorize 
router.get('/authorize_user', exports.authorize_user);
// This is your redirect URI 
router.get('/handleauth', exports.handleauth);
