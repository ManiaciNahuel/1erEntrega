const express = require('express')
const { Router } = express

const Contenedor = require('../contenedor/Contenedor.js')
const productosApi = new Contenedor(`productos.json`)
const { esAdmin } = require('../utils/index.js')

const routerProductos = new Router()

routerProductos
//Mostrar todos
    .get('/', (req, res) => {
    res.json(productosApi.getAll())
})

//Mostrar un producto
.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(productosApi.getOne(id))
})

//Agregar un producto
.post('/', esAdmin, (req, res) => {
    const newObject = req.body
    console.log(newObject);
    res.json(productosApi.postNew(newObject))
})

//Actualizar producto 
.put('/:id', esAdmin, (req, res) => {
    const newObject = req.body
    const id = req.params.id
    res.json(productosApi.upload(newObject, id))
})

//Eliminar producto
.delete('/:id', esAdmin, (req, res) => {
    const id = req.params.id
    res.json(productosApi.delete(id))
})

module.exports = { routerProductos }