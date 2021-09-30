const path = require('path')
const Videojuego = require('../utils/database').models.videojuego
const Consola = require('../utils/database').models.consola

exports.postAgregarVideojuego = (req, res) => {
    console.log(req.body)
    Videojuego.create(req.body)
        .then(result => {
            console.log("Videojuego creado exitosamente")
            res.json({ estado: "aceptado" })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: "error" })
        })
}


exports.getObtenerVideojuegos = (req, res) => {
    Videojuego.findAll()
        .then(videojuegos=>{
            console.log(videojuegos)
            res.json(videojuegos)
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: "error" })
        })
}

exports.postBorrarVideojuego = (req, res) => {
    console.log(req.body)
    Videojuego.destroy({
        where : {
            id : req.body.id
        }
    })
        .then(()=>{
            console.log("Videojuego destruido"),
            res.json({estado: "aceptado"})
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: "error" })
        })
}


exports.postActualizarVideojuego = (req, res) => {
    console.log(req.body)
    Videojuego.update({
        nombre : req.body.nombre
    },{
        where : {
            id : req.body.id
        }
    })
        .then(()=>{
            console.log("Videojuego actualizado")
            res.json({estado: "aceptado"})
        })
        .catch((err) => {
            console.log(err)
        res.json({ estado: 'error' })
        })
}