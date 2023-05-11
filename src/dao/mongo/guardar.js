const esquemaUsuario = require("../modelos/modelo_usuario");
require("./conexion");

exports.ejecutar = async (datos) => {
    try{
        console.log("DAO guardar");
        console.log("datos: " + JSON.stringify(datos));
        const usuario = new esquemaUsuario(datos);
        var resultado = await usuario.save();

        return resultado;
    }
    catch(error){
        console.error("daoGuardar:Ocurrió un error al guardar los datos: "+ error);
        return null;
    }
};