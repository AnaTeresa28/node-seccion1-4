const argv = require('yargs')
			.option('b', {
				alias: 'base',
				type: 'number',
				demandOption: true,
				describe: 'Base de cálculo de la tabla de multiplicar'
			})
			.option('l', {
				alias: 'listar',
				type: 'boolean',
				demandOption: true,
				default:false,
				describe: 'Lista la tabla en consola'
			})
			.option('m', {
				alias: 'maximo',
				type: 'number',
				demandOption: true,
				describe: 'Número máximo de cálculo'
			})
			.check( (argv, option) => {
				if ( isNaN(argv.b) ){
					throw 'La base debe ser un número'
				}
				return true;
			})
			.argv;

module.exports = argv;