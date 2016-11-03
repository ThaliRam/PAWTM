var http = require ('http');
var colors = require ('colors');
var fs = require ('fs');

//Cargando configuraciones
var config = require('./config/config.js');
var IP = config.IP;
var PORT = config.PORT;

//Tema de colors
colors.setTheme (config.color_theme);
var server = http.createServer (function(req,res){
    //Extrayendo el path de la url
     var path = req.url;
     //Normalizando el path
    if (path === '/'){
        path = './static/index.html';
    }
    else{
        path = './static/' + path;
    }
    console.log (`>Recurso solicitado: ${path}`.data);
    //Decidiendo el Content-Type en funcion de la extencion del archivo solicitado
    var ext= path.split ('.')[2];
        switch(ext){
        case 'html':
        res.writeHead (200,{
        'Content-Type': 'text/html'});
        break;
        case 'js':
         res.writeHead (200,{
        'Content-Type': 'text/javascript'});
        break;
        case 'css':
        (200,{
        'Content-Type': 'text/css'});
        break;
    }


    //codigo de nuestro server
    res.writeHead (200,{
        'Content-Type': 'text/html'
    });
    fs.readFile (path, 'utf8',function (err, content){

    if (err){
        console.log(`>Error al leer archivo: ${err}`);
        res.writeHead(500,{
            'Content-Type' :'text/plain'
     });

        res.end ("Error 500 : Internal Error ...");
        }
     else {
    //TODO: servir el archiv0
    console.log("Se sirve el archivo: ./static/index.html");
    res.end(content);
    }
    });
   
});
server.listen (PORT, IP, function(){
    console.log(`Server working @http://${IP}:${PORT}/`.info);
});