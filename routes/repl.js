var fs = require('fs');
/**
 * repl study
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.index = function(req, res){
  console.log(req);
  res.send(JSON.stringify(req.query));
};