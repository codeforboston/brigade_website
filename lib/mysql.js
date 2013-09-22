var mysql = require('mysql');
var mysql_details = require('./config').mysql_details;

var connection = mysql.createConnection(mysql_details);
exports.connection = connection;
