var express = require('express');
var app = express();


app.get('/', function(request,response){
	response.send('ola mundo');
});
	


app.listen(3000, function(){
	console.log('servidor rodando');
});