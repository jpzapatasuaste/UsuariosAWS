'use strict';
const daoActualizar = require("../dao/dynamo/actualizar");
const generarRespuesta = require('../funciones/generar_respuesta');

exports.ejecutar = async (event) => {
    var req;
    try{
        console.log("Controlador actualizar");
        console.log("req: " + JSON.stringify(event));
        if (event.headers === undefined) {
            req = event;
        } else {
            req = JSON.parse(event.body);
        }

        let  resultadoGuardar = await daoActualizar.ejecutar(process.env.TABLA_USUARIOS, 'id', event.pathParameters.id, req);
        return await generarRespuesta.exitosa("Los datos se han actualizado exitosamente.", resultadoGuardar);
    }
    catch(error){
        console.error("Ocurrió un error al actualizar los datos: " + error);
        return await generarRespuesta.error(500, "Ocurrió un error al actualizar los datos", error);
    }
};