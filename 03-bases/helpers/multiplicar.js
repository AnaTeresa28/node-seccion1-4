const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

/*const crearArchivo = ( ) => {

    console.log('==================');
    console.log('    Tabla del 5   ');
    console.log('==================');
    let salida = '';

    for (let base = 1; base<=10; base++)
    {
        tabla = 'tabla-' + base + '.txt';
        salida = '';
        for (let i=1; i<=10; i++)
        {
            salida += (`${ base } x ${ i }  =  ${ i * base}\n`);
            fs.writeFileSync(tabla, salida);
        }
        console.log(`${tabla} creado exitosamente!`);

    }
} */

/*const crearArchivo = ( ) => {

    const promesa = new Promise( (resolve, rejects) => {
        console.log('==================');
        console.log('    Tabla del 1 al 10   ');
        console.log('==================');
        let salida = '';

        for (let base = 1; base<=10; base++)
        {
            tabla = 'tabla-' + base + '.txt';
            salida = '';
            for (let i=1; i<=10; i++)
            {
                salida += (`${ base } x ${ i }  =  ${ i * base}\n`);
                fs.writeFileSync(tabla, salida);
            }
            resolve( `Tablas creadas exitosamente!` );
            //: reject(`Salario: Aún no tiene asignado`);

        }
        //resolve( `${tabla} creado exitosamente!` );
    })
    return promesa;
}*/

const crearArchivo = async( base2 = 5, listar = false, maximo = 10 ) => {

    try{
        let salida, consola = '';

        for (let base = base2; base<=base2; base++)
        {
            tabla = 'tabla-' + base + '.txt';
            salida = '';
            for (let i=1; i<=maximo; i++)
            {
                salida += (`${ base } X ${ i } = ${ i * base}\n`);
                consola += (`${ base } ${ 'X'.green }  ${ i }  ${ '='.green }  ${ i * base}\n`);
            }
            fs.writeFileSync(`./salida/`+tabla, salida);

        }

        if ( listar ) {
            console.log('=================='.green);
            console.log('    Tabla del : ', colors.blue(base2));
            console.log('=================='.green);
            console.log( consola.white);
        }
        return ('Tablas creadas exitosamente!');

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}