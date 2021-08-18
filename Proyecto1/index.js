//console.log("Hola mundo")
//console.log("Segunda linea")

//Importando la bibliotexca para realizar aplicaciones web
const express = require("express")
const path = require("path")
    //Creación de la aplicación web
const app = express();

//Atender una petición del recurso mipagina
app.get('/mipagina', (request, response) => {
    response.sendFile(path.join(__dirname, 'views',
        'index.html'))
})

//Escuchar peticiones
app.listen(8080, () => {
    console.log("Aplicación web en linea en el puerto 8080")
})