const path = require('path')

exports.getAgregarVideojuego = (req, res)=>{
    res.send('Formulario')
}

exports.postAgregarVideojuego = (req, res)=>{
    console.log(req.body)
    res.redirect('/videojuegos/confirmacionDatos')
}

exports.getConfirmacionDatos = (req, res)=>{
    res.send('Confirmacion datos')
}

exports.getMostrarVideojugos = (req, res)=>{
    res.send('Mostrar Videojuegos')
}
