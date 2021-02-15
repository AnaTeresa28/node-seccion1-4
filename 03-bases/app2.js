const fs = require('fs');

console.clear();
console.log('==================');
console.log('    Tabla del 5   ');
console.log('==================');
//const base = 1;
let salida = '';
/*for (let i=1; i<=10; i++)
{
    console.log(`${ base } x ${ i }  =  ${ i * base} `);
} */

for (let base = 1; base<=10; base++)
{
    tabla = 'tabla-' + base + '.txt';
    salida = '';
    for (let i=1; i<=10; i++)
    {
        salida += (`${ base } x ${ i }  =  ${ i * base}\n`);
        fs.writeFile(tabla, salida, (err) =>{
            if (err) throw err;
            //console.log(`${tabla} creado exitosamente!`);
        } )
    }
    console.log(`${tabla} creado exitosamente!`);

}