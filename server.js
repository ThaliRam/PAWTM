var http = require ('http');
var colors = require ('colors')

//Cargando configuraciones
var config = require('./config/config.js')
var IP = 'config.IP';
var PORT = 'config.PORT';

//Tema de colors
colors.setTheme (config.color_theme);
var server = http.createServer (function(req,res){
    //codigo de nuestro server
    res.writeHead (200,{
        'Content-Type': 'text/plain'
    });
    res.end ('Server funcionando');
});
server.listen (PORT, IP, function(){
    console.log('Server working @http://$(IP):$(PORT)/');
});