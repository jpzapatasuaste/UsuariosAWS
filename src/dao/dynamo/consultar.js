const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.REGION_AWS });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.ejecutar = async (tabla, nombreLlave, valorLlave) => {

    console.log("Consulta en tabla " + tabla);
    let llave = {};
    llave[nombreLlave] = valorLlave;
    const params = {
        TableName: tabla,
        Key: llave
    };

    return await new Promise((resolve, reject) => {
        dynamoDB.get(params, (error, result) => {
            if (error) {
                console.log('Error en consulta: ' + JSON.stringify(error));
                reject(error);
                return;
            }
            if (result.Item) {
                resolve(result.Item);
                return;
            } else {
                reject({
                    statusCode: 404,
                    body: {
                        mensaje: 'No se encontraron coincidencias de búsqueda'
                    }
                });
                return;
            }
        });
    });
};