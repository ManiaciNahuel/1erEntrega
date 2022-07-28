const app = require('./server.js')

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log("Servidor HTTP escuchando en el puerto " + server.address().port);
})

server.on("error", error => console.log(error))