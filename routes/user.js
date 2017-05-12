var dao = require('./dao');
/*
 * GET users listing.
 */
 
exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.sql = function(req, res){
	var ret = dao.execute(req.query.sql);
	res.send(ret);
}