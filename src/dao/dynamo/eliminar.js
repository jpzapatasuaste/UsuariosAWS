const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.REGION_AWS });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.ejecutar = async (tabla, nombreLlave, valorLlave) => {

    console.log("Eliminación de elemento en tabla " + tabla);
    let llave = {};
    llave[nombreLlave] = valorLlave;
    const params = {
        TableName: tabla,
        Key: llave,
    };
    return await new Promise((resolve, reject) => {
        dynamoDB.delete(params, (error) => {
            if (error) {
                console.log('Error al eliminar elemento: ' + JSON.stringify(error));
                reject(error);
                return;
            }
            resolve({
                mensaje:'Eliminación exitosa'
            });
            return;


        });
    });
};