//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const vjRoutes = require('./routes/examenIADM')

//Creación de la aplicación web
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Middleware
app.use(express.static(path.join(__dirname,'public')))

//VCM
app.use("/examen",vjRoutes);

// //pa probar que se vea
// app.get('/examen',(request,response)=>{
//     response.sendFile(path.join(__dirname,'views','forma.html'))
// })

//Que la aplicación escuche peticiones
app.listen(8081,()=>{
    console.log("Aplicación web del examen en línea en el puerto 8081")
})