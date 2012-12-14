var kue = require('kue');

exports.create = function(req, res){
  var client = kue.redis;

  console.log(req.body);

  client.get('https://github.com/kuryaki.atom', function(error, data){

    console.log(data);

  });

  res.send(200);
};