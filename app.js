var baseDeDatos = {
    usuario: "Néstor",
    contraseña: "violin"
};
console.log("Arrancando server de Node");
var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use( parcero.urlencoded() )
var servidor;


servidor = web.listen(8080, function(){
    console.log("servidor arrancado")
});

web.get("/", function(req, res){
   res.sendfile("formulario.html");
});

web.post("/entrar", function(req, res){
   if(req.body.usuario == baseDeDatos.usuario && req.body.clave == baseDeDatos.contraseña){
       res.send("Bienvenido a la página secreta");
   } else{
       res.send("shu shu fuera de aqui");
   }
});