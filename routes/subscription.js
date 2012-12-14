var jobs = require('kue').createQueue();
var request = require('request');
var config = require('../config.js');

exports.create = function(req, res){
  var client = kue.redis;

  // TODO handle this job (check for new repos and subscribe to them)
  jobs.create('update_user', {login:req.body.login}).delay(60000).save();

  // TODO move this to a middle-ware that gets an array of repositories
  if(req.body.access_token){
    request
    .get('https://api.github.com/user/repos?access_token='+req.body.access_token, {json:true},
      function(error, response, body){
        body.map(function(repo){
          console.log(repo.full_name);
          // TODO subscribe and keep status in redis
        });
      });
  }else{
    request
    .get('https://api.github.com/users/'+req.body.login+'/repos', {json:true},
      function(error, response, body){
        body.map(function(repo){
          console.log(repo.full_name);
        });
      });
  }


  // client.get('https://github.com/kuryaki.json', function(error, data){

  //   console.log(data);

  // });

  res.send(200);
};