var restify = require('restify');
var mongojs = require('mongojs');

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, function(){
	console.log("api.yatodol running on port 3000");
});

server.get("/todos", function(req, res, next){
	res.send("Display a list of todo items");
	return next();
});