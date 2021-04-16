const express = require ('express');
const app = express();

//middlewares // los datos que envien del cliente los en jormato de json, los va a leer js
app.use(express.json());
//solamente lee texto
app.use(express.urlencoded({extended: false}));


//rutas
app.use(require('./rutas/index'));


app.listen(3000);
console.log ('Servidor corriendo en el puerto 3000');

