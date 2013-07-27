var config = require('./config'),
	express = require('express');

/*
var mysql = require('mysql');
var dbc = mysql.createConnection(config.mysql_details);
dbc.connect();
dbc.query('SELECT 1 + 1 AS solution', function(err, rows, fields){
	if (err) throw err;
	console.log('solution is: ',rows[0].solution);
});
*/

var app = express()
	.use(express.methodOverride())
	.set('view engine', 'jade')
	.set('views', 'views');
app.use(app.router);
if(config.dev) app.use(express.logger('dev'));

var assets_directory = 'assets';
app.use('/' + assets_directory, express.static(assets_directory));

app.get('/', function(req, res){
	res.render('lorem');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.send(500, ':/');
});
app.listen(config.port);
console.log('Server running at port ' + config.port);
