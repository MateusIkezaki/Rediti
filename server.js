// npm init -> npm install express -> Mash ENTER -> node server.js
var express = require('express');
var bodyParser = require('body-parser');

var servidor = express();

servidor.use(express.static("dist"));
servidor.use(bodyParser.json());
servidor.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var usuarios = [
    {id: 0, nome: "u/Dio_Brando", foto: "DIOOO.png"}
];

var post = [
    {id: 0, usuario: usuarios[0], texto: "Reking jojo in 1v1 xDDD", votes: -6, sub: "r/CrusadersSux", pic: "tehworl.png"},
    {id: 0, usuario: usuarios[0], texto: "Reking jojo in 1v1 xDDD", votes: -6, sub: "r/CrusadersSux", pic: "tehworl.png"}
];


servidor.get("/posts", function(req,res){
    res.send(post);
})

servidor.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server running...");
})
//escutar porta 3000 e quando detectar usuario dizer servidor rodando.

//!CTRL C para matar o servidor!