const express = require('express');
const router = express.Router();
const vjController = require('../controllers/examenIADM');

//router.get('/', vjController.getForma);

router.get('/formulario', vjController.getForma);

router.post('/validacion', vjController.postValidar);


module.exports = router;