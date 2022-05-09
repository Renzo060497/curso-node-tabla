const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(base, listar = false, hasta = 10) => {
    try{
        let salida = ''
        let consola = ''
        
        for(let i = 1; i <= hasta; i++){
            salida += `${base} * ${i} = ${base * i}\n` 
            consola += `${base} ${'*'.red} ${i} ${'='.red} ${base * i}\n` 
        }

        if(listar){
            console.log('================================='.rainbow.bold)
            console.log(`          Tabla del ${base}`.magenta.bold)
            console.log('================================='.rainbow.bold)
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch(err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}