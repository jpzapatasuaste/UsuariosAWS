const headers = {
    'Access-Control-Allow-Origin': '*'
  };
  function generica(statusCode, mensaje, data, error) {
    const objResponse = {
        statusCode,
        mensaje,
        data,
        error
    };
    return {
        statusCode: statusCode,
        headers: headers,
        body: JSON.stringify(objResponse)
    };
  }
  
  function exitosa(mensaje, data) {
    
    return generica(200, mensaje, data,undefined);
  }
  
  function error(statusCode, mensaje, error) {
    if (typeof error === 'object') {
      error = statusCode.body ? statusCode.body : statusCode.error;
    }
  
    return generica(statusCode, mensaje, undefined, error);
  }
  
  function noAutorizada() {
    return generica(401, 'Unauthorized', undefined, undefined);
  }
  
  module.exports = {
    generica,
    exitosa,
    error,
    noAutorizada
  };
  