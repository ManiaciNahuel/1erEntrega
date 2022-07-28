const express = require('express')
const { routerProductos, routerCarrito } = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)



module.exports = app