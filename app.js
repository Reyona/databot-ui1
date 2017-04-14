var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongoose=require('mongoose');

//route require------
var indexPage = require('./routes/index');
var probdata = require('./routes/probdata');

var demo = require('./routes/demo');
var users = require('./routes/users');
var hi=require('./routes/hi');
//------route require

mongoose.connect('mongodb://huangch7-w7:27017/dataquality',function(err){
  if(err){
    console.log(err);
  }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
/*app.set('view engine', 'jade');*/

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route setting------
app.use('/', indexPage);
app.use('/probdata', probdata);

app.use('/demo', demo);
app.use('/users', users);
app.use('/hi',hi);
//------route setting

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.sendfile('./public/error.html');
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.sendfile('./public/error.html');
});


module.exports = app;
