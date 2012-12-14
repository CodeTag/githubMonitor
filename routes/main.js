var Overlord = require('./../lib/overlord');
var Minion = require('./../lib/minion');

exports.home = function(req, res){
  res.render('index', { title: 'Express' });

  var overlord = new Overlord();
  var minion = new Minion();

  overlord.command();
  minion.serve();
};