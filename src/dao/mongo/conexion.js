const cadena = "mongodb+srv://jzapata:adminadmin@cluster0.61mxti0.mongodb.net/global";

const mongoose = require('mongoose');
// colocamos la url de conexión local y el nombre de la base de datos

mongoose.set("strictQuery", false);

mongoose.connect(cadena);