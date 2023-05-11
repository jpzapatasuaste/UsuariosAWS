const esquemaUsuario = require("../../modelos/modelo_usuario");
require("./conexion");

exports.ejecutar = async (id, datos) => {
    try{
        console.log("DAO actualizar");
        console.log("id: " + id);
        console.log("datos: " + JSON.stringify(datos));

        var resultado = await esquemaUsuario.updateOne({_id: id}, {$set: {nombre: datos.nombre,edad: datos.edad,email: datos.email}});

        return resultado;
    }
    catch(error){
        console.error("daoActualizar:Ocurrió un error al actualizar los datos: "+ error);
        return null;
    }
};