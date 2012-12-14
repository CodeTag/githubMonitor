var kue = require('kue');

exports = module.exports = Overlord;

function Overlord(){
  this.jobs = kue.createQueue();
}

Overlord.prototype.command = function(){
  this.jobs.create('salute', {name:'David'}).save();
};