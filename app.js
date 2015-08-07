var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Bievenido a Sumergida Producciones, Servidor funcionando a la prefección en el http://%s:%s', host, port);
});