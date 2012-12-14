var kue = require('kue');
var redis = require('redis');
var config = require('./config');

kue.redis.createClient = function() {
  var client = redis.createClient(config.db.port, config.db.host);
  if(config.db.auth){
    client.auth(config.db.auth);
  }
  return client;
};

// Expose the app
exports = module.exports = kue;

// Expose the redis connection
exports.redis = kue.redis.createClient();

kue.jobs = kue.createQueue();

kue.jobs.promote();