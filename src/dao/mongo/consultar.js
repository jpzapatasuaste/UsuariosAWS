const esquemaUsuario = require("../modelos/modelo_usuario");
require("./conexion");

exports.consultarPorID = async (id) => {
    try{
        console.log("DAO consultar por id");
        console.log("id: " + id);

        var resultado = await esquemaUsuario.findOne({_id: id});

        return resultado;
    }
    catch(error){
        console.error("daoConsultarPorId:Ocurrió un error al recuperar los datos: "+ error);
        return null;
    }
};

exports.consultar = async (datos) => {
    try{
        console.log("DAO consultar");
        console.log("datos: " + JSON.stringify(datos));

        var resultado = await esquemaUsuario.find(datos);

        return resultado;
    }
    catch(error){
        console.error("daoConsultar:Ocurrió un error al recuperar los datos: "+ error);
        return null;
    }
};