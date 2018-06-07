var mongodb = require('../db/mongodb');

exports.home = function *(){
  this.body = "HOME";
};

exports.one = function *(){
  var result = this.request.body;
  if(result.data){
    this.body = {message: "Success"}
    mongodb.one(result);
  }
  else{
    this.body = {message: "Fail"}
  }
};

exports.two = function *(){
  var result = this.request.body;
  if(result.data){
    this.body = {message: "Success"}
    mongodb.two(result);
  }
  else{
    this.body = {message: "Fail"}
  }
};

exports.three = function *(){
  var result = this.request.body;
  if(result.data){
    this.body = {message: "Success"}
    mongodb.three(result);
  }
  else{
    this.body = {message: "Fail"}
  }
};
