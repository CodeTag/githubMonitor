var config = {
  development: {
    db: {
      host: '127.0.0.1',
      port: 6379
    },
    protocol: 'http',
    host: 'localhost',
    port: 3000,
    access_token: 'b7b94ad5a56a71aad5ac96b41615d6df31c158aa'
  },

  production: {
    db: {
      host: 'nodejitsudb4906573230.redis.irstack.com',
      port: 6379,
      auth: 'nodejitsudb4906573230.redis.irstack.com:f327cfe980c971946e80b8e975fbebb4'
    },
    protocol: 'http',
    host: 'feedscriber.jit.su',
    port: 80,
    access_token: 'b7b94ad5a56a71aad5ac96b41615d6df31c158aa'
  }
};

var env = process.env.NODE_ENV || 'development';
config[env].appurl = config[env].protocol+'://'+config[env].host+':'+config[env].port;

module.exports = config[env];