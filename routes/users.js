var express = require('express');
require('express-mongoose');
var UserSchema = require('../model/UserSchema');

var User = UserSchema.User;
var router = express.Router();


router.post('/', function(req, res, next) {
  var user = new User({
    name : req.body.name,
    password:req.body.password
});
  user.save();
  res.send('respond with a resource');

/*

//search user list
  res.send(User.find());
*/

});

router.get('/', function(req, res, next) {
/*
// init data. Use "get" to simplify
  var user = new User({
    name : 'Freewind',
    password:'Freewind'
  });
  user.save();
  res.send('respond with a resource');
*/

//search user list
   res.send(User.find());

});

module.exports = router;
