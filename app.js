var config = require('./config'),
	express = require('express');

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
