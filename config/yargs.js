const argv = require('yargs')
    .option('b', {        
        alias: 'base',
        describe: 'Es la base de la tabla de multiplicar',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        describe: 'Muestra la tabla en consola',
        type:'boolean',
        default: false
    })
    .option('h', {
        alias:'hasta',
        describe: 'Limite superior de la tabla',
        type: 'number',
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) throw 'La base debe ser un numero'
        if(isNaN(argv.h)) throw 'El limite superior debe ser un numero'
        return true
    })
    .argv

module.exports = {
    argv
}