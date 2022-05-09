const {crearArchivo} = require('./helpers/multiplicar')
const {argv} = require('./config/yargs')
const colors = require('colors')

console.clear()
// console.log('yargs', argv)

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.green.bold))
    .catch(err => console.log(err))

// const [ , , arg3 = 'base=5'] = process.argv
// const [ , base = 5] = arg3.split('=')

// crearArchivo(base)
//     .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
//     .catch(err => console.log(err))