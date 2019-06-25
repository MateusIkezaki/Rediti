//npm init -> Mash ENTER -> node server.js
var express = require('express');

var servidor = express();

servidor.get("/", express.static("dist"))

servidor.listen(3000, function(req, res){
    console.log("Server running...");
})
//escutar porta 3000 e quando detectar usuario dizer servidor rodando.

//!CTRL C para matar o servidor!