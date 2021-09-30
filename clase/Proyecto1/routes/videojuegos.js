const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/videojuegos')

//Servicio para procesar los datos del formulario
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)

//Consulta de videojuegos
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)

//Eliminar videojuego
router.post('borrarVideojuego', vjController.postBorrarVideojuego)

//Actualizar videojuego
router.post('acualizarVideojuego', vjController.postActualizarVideojuego)

module.exports = router