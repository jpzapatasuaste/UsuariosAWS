const express = require('express');
const controlador_guardar  = require('../controladores/controlador_guardar');
const controlador_consultar  = require('../controladores/controlador_consultar');
const controlador_consultar_por_id  = require('../controladores/controlador_consultar_por_id');
const controlador_actualizar  = require('../controladores/controlador_actualizar');
const controlador_eliminar  = require('../controladores/controlador_eliminar');
const router = express.Router();

router.post('/usuarios', controlador_guardar.ejecutar);
router.get('/usuarios', controlador_consultar.ejecutar);
router.get('/usuarios/:id', controlador_consultar_por_id.ejecutar);
router.put('/usuarios/:id', controlador_actualizar.ejecutar);
router.delete('/usuarios/:id', controlador_eliminar.ejecutar);


module.exports = router;