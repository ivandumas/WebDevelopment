const express = require("express")
const path = require('path')
const bodyParser = require("body-parser")

const app = express();

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
    //Configurar el servidor y que sepa que es un json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/Intel/Alder-Lake", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get("/Intel/Register", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'registro.html'))
});

app.get('/informacion/:identificador/:nombre', (req, res) => {
    res.send("<h1>Recibiendo datos</h1>")
    console.log(req.query) //URL
    console.log(req.params) //URL
        //Valor concatenado
    console.log("Password:" + req.query.password)
        //Valor integrado
    console.log(`Marca: ${req.query.marca}`)
    console.log(req.params.identificador)
})

app.post('/enviarInfo', (req, res) => {
    res.send("Informacion recibida")
    console.log(req.body)
})

app.listen(8080, () => {
    console.log('Listening on port ' + 8080);
});