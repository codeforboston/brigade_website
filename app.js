var config = require('./config'),
	express = require('express');

var app = express()
	.use(express.bodyParser())
	.use(express.cookieParser())
	.use(express.session({secret: config.session_secret}))
	.use(express.methodOverride())
	.set('view engine', 'jade')
	.set('views', 'views');
app.use(app.router);
if(config.dev) app.use(express.logger('dev'));

require('express-persona')(app, {audience: config.persona_audience});

var assets_directory = 'assets';
app.use('/' + assets_directory, express.static(assets_directory));

app.get('/', function(req, res){
	res.locals.session = req.session;
	res.render('lorem');
});

var pages = ['about', 'projects', 'press', 'contact', 'members'];

pages.forEach(function(page){
   app.get('/'+page, function(req, res){
       res.locals.session = req.session;
       res.render(page);
   });
});

app.get('/:page', function(req, res){
    res.locals.session = req.session;
    res.render('lorem');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.send(500, ':/');
});
app.listen(config.port);
console.log('Server running at port ' + config.port);
