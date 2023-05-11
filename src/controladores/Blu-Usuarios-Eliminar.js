'use strict';
const daoEliminar = require("../dao/dynamo/eliminar");
const generarRespuesta = require('../funciones/generar_respuesta');

exports.ejecutar = async (event) => {
    var req;
    try{
        console.log("Controlador consultar por id");
        console.log("req: " + JSON.stringify(event));
        if (event.headers === undefined) {
            req = event;
        } else {
            req = event.pathParameters;
        }

        var  resultadoGuardar = await daoEliminar.ejecutar(process.env.TABLA_USUARIOS, 'id', req.id);
        return await generarRespuesta.exitosa("Los datos se han eliminado correctamente", undefined, undefined);
    }
    catch(error){
        console.error("Ocurrió un error al eliminar los datos: " + error);
        return await generarRespuesta.error(500, "Ocurrió un error al eliminar los datos", error);
    }
};