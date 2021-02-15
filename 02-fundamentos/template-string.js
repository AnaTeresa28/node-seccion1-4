let nombre = 'Randol';
let real = 'Rodolfo';

console.log( nombre + ' ' + real);
console.log(`${ nombre } ${ real }`);

let nombreCompleto = nombre + ' ' + real;
let nombreCompleto2 = `${ nombre } ${ real }`;
console.log(nombreCompleto === nombreCompleto2);

function getNombreCompleto () {
    return `${ nombre } ${ real }`;
}
console.log(`El nombre completo es: ${ getNombreCompleto() }`);