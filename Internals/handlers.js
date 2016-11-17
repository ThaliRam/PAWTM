var path = require ('path');
var fs = require ('fs');

//
function fortuna (){
    var fortune  = ["Las huellas de las personas que caminaron juntas nunca se borran", 
    "A veces, sólo a veces, las palmeras crecen en la nieve", 
    "La verdad más pura se convierte en el más inconfesable secreto",
    "Fortuna no encontrada: ¿Abortar, Reintentar o Ignorar?",
    "Una mujer que busque ser igual a los hombres carece de ambición. ¡Auch!"]; 
    var rand = fortune[Math.floor(Math.random() * fortune.length)];
    return rand;
}
// Creando manejadores
var  _getAuthor = function (req,res){
    res.end ('Autor: Thali Ram');
};
var _getFortune = function (req,res){
    res.end (fortuna());
};

// Objeto manejador
var handler = {};

// Registro de manejadores en el objeto manejador
handler["/getauthor"] = _getAuthor;
handler["/getfortune"] = _getFortune;

// Exportando objeto manejador
module.exports = handler;




