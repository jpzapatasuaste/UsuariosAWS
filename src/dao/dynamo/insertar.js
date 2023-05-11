const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.REGION_AWS });
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const crypto = require("crypto");

module.exports.ejecutar = async (tabla, elementos) => {

    console.log("Insertar en tabla: " + tabla);
    elementos.fecha_registro = new Date().toLocaleString(process.env.LENGUAGE, {timeZone: process.env.TIME_ZONE});
    elementos.fecha_registro_timestamp = Math.round((new Date()).getTime() / 1000);   
    const generateUUID = () => crypto.randomBytes(16).toString("hex"); 
    elementos.id =  generateUUID();
    const params = {
        TableName: tabla,
        Item: elementos,
    };
    return await new Promise((resolve, reject) => {
        dynamoDB.put(params, (error) => {
            if (error) {
                console.log('Error al insertar' + JSON.stringify(error));
                reject(error);
                return;
                
            } else {
                resolve(params.Item);
                return;
            }

        });
    });
};