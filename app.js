'use strict';

var a127 = require('a127-magic');
var express = require('express');
var db = require('./db/recipe-db');
var app = express();

module.exports = app; // for testing

// initialize a127 framework
a127.init(function(config) {


  // include a127 middleware
  app.use(a127.middleware(config));

  // ui

  app.use(config['a127.magic'].swaggerTools.swaggerUi(config.ui));

  // listen to client at port # and display more info to connect to ui
  var port = config.server.port;
  // begin listening for client requests
  app.listen(port,function(){
    console.log('app ui: http://localhost:' + port + config.ui.swaggerUi);


  });

  var resObject = {
    "id": 0,
    "name": "Source soup2",
    "category": "soup",
    "rank": "NA",
    "recipeCountry": "Cambodia"
  }
  //db.createRecipe('recipeId',resObject,function(){
  //
  //});
  //console.log(db.getRecipe('recipeId',7));
  db.deleteRecipe('recipeId',7);


});