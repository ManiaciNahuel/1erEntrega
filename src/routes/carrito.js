const express = require('express')
const { Router } = express


const Contenedor = require('../contenedor/Contenedor.js')
const productos = new Contenedor('productos.json')
const carritos = new Contenedor('carritos.json')
const routerCarrito = new Router()

//Router carrito
routerCarrito

//Crear carrito
    .post('/', (req, res) => {
    res.json({ id: carritos.postNew({ productos: [] }) })
})

//Vaciar y eliminar carrito
.delete('/:id', (req, res) => {
    const cartId = req.params.id
    res.json({ id: carritos.delete(cartId) })
})

//Ver productos del carrito
.get('/:id/productos', (req, res) => {
    const cartId = req.params.id
    const carrito = carritos.getOne(cartId)

    res.json(carrito.productos)
})

//Agregar productos al carrito por el id del prod
.post('/:id/productos', (req, res) => {
    const cartId = req.params.id
    const carrito = carritos.getOne(cartId)
    const producto = productos.getOne(req.body.id)
    carrito.productos.push(producto)
    res.send(carritos.upload(carrito, cartId))
})

//Eliminar un producto del carrito por ids
.delete('/:id/productos/:id_prod', (req, res) => {
    const cartId = req.params.id
    const prodId = req.params.id_prod
    const carrito = carritos.getOne(cartId)

    const index = carrito.productos.findIndex(prod => prod.id == prodId)
    if (index != -1) {
        carrito.productos.splice(index, 1)
        carritos.upload(carrito, cartId)
        res.send(carrito.productos)
    }
    res.end()
})

module.exports = { routerCarrito }