const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
var colors = require('colors');
//const argv = require('yargs').argv;
/* const argv = require('yargs')
			.option('b', {
				alias: 'base',
				type: 'number',
				demandOption: true
			})
			.option('l', {
				alias: 'listar',
				type: 'boolean',
				demandOption: true,
				default:false
			})
			.check( (argv, option) => {
				if ( isNaN(argv.b) ){
					throw 'La base debe ser un número'
				}
				return true;
			})
			.argv;
			*/
console.clear();
//console.log( process.argv );
//console.log( argv );
//console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.m)
      .then( nombreArchivo => console.log(nombreArchivo.blue))
      .catch( err => console.log(err) );