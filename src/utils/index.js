const admin = true

//Midleware
function esAdmin(req, res, next) {
    if (!admin) {
        res.json(noEsAdmin())
    } else {
        next()
    }
}

function noEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.description = `ruta '${ruta}' metodo '${metodo}' no autorizada`
    } else {
        error.description = 'no autorizada'
    }
    return error
}

module.exports = { esAdmin }