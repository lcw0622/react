var mysql = require('mysql');
var _ = require('lodash');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    debug: true,
    multipleStatements: true
});
// pool.connect(function(err){
// 	if(err){
// 		console.log('error connecting: ' + err.stack);
// 		return;
// 	}
// });
exports.execute = function(sql) {
    var ret = pool.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log(fields);
    });
    console.log('!!!!!!!!!!!!!');
    console.log(ret);
    return ret;
}
exports.query = function() {}
exports.update = function() {}
