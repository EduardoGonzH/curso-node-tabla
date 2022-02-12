const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 1, listar = false, hasta = 10) => {



    let salida = '';
    let consola = '';
    for (let i = 1; i <= hasta; i++) {
        const element = i;
        consola += `${base} ${'x'.green} ${element} ${'='.green} ${base * element}\n`;
        salida += `${base} x ${element} = ${base * element}\n`;
    }

    if (listar) {
        console.log('==================='.green);
        console.log('    Tabla del:'.green, colors.blue( base));
        console.log('==================='.green);
        console.log(consola);

    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    console.log(`tabla -${base}.txt creado`);
}

module.exports = {
    crearArchivo
}