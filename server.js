const express = require('express')
const routes = require('./routes')
const cors = require('cors')

//Puerto
const PORT = 8080
const app = express()

//Middleware necesario para tomar datos del body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

//Uso de las rutas
app.use( '/', routes )

//Iniciado y escuchado del server
app.listen(PORT, err => {
    try {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    } catch {
        console.log(err);
    }
})