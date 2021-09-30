const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/videojuegos')

//Formulario para dar de alta videojuegos
router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para procesar los datos del formulario
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
//Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Consulta de videojuegos
router.get('/mostrarVideojuegos',vjController.getMostrarVideojugos)

module.exports = router