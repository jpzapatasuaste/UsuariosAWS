'use strict';
const daoGuardar = require("../dao/dynamo/insertar");
const generarRespuesta = require('../funciones/generar_respuesta');

exports.ejecutar = async (event) => {
    var req;

    try{
        console.log("Controlador guardar");
        console.log("req: " + JSON.stringify(event));
        if (event.headers === undefined) {
            req = event;
        } else {
            req = JSON.parse(event.body);
        }

        let  resultadoGuardar = await daoGuardar.ejecutar(process.env.TABLA_USUARIOS, req);
        return await generarRespuesta.generica(201, "Los datos de han creado exitosamente", resultadoGuardar, undefined);
    }
    catch(error){
        console.error("Ocurrió un error al guardar los datos: " + error);
        return await generarRespuesta.error( 500, "Ocurrió un error al guardar los datos", error);
    }
};