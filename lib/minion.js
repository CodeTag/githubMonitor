var kue = require('kue');

exports = module.exports = Minion;

function Minion(){
  this.jobs = kue.createQueue();
}

Minion.prototype.serve=function(){
  this.jobs.process('salute', function(job, done){

    console.log('yes ' + job.data.name);

  });
};
