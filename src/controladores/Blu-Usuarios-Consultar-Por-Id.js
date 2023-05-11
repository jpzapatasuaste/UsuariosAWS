'use strict';
const daoConsultar = require("../dao/dynamo/consultar");
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

        var  resultadoGuardar = await daoConsultar.ejecutar(process.env.TABLA_USUARIOS, 'id', req.id);
        return await generarRespuesta.exitosa("Los datos se han recuperado correctamente", resultadoGuardar, undefined);
    }
    catch(error){
        console.error("Ocurrió un error al consultar los datos: " + error);
        return await generarRespuesta.error(500, "Ocurrió un error al consultar los datos", error);
    }
};