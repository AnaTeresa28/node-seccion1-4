const empleados = [
    {
        id: 1,
        nombre: 'Ana'
    },
    {
        id: 2,
        nombre: 'Teresa'
    },
    {
        id: 3,
        nombre: 'Omar'
    }

];

const salarios = [
    {
        id: 1,
        monto: '200'
    },
    {
        id: 2,
        monto: '400'
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )
    if (empleado) {
        callback( null, empleado);
    }else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

const id = 3;

const getSalario = (id, callback) => {
    const salario = salarios.find ( (s) => s.id === id )
    if (salario) {
        callback(null, salario);
    } else {
        callback(`No tiene salario asignado`);
    }
}

getEmpleado(id, (err, empleado) => {

    if (err)
    {
        console.log('Error !');
        return console.log(err);
    }

    console.log('Empelado:');
    console.log(`Id: ${ empleado.id }`);
    console.log(`Nombre: ${ empleado.nombre }`);

    getSalario (id, (err, salario) => {
        if (err) {
            console.log(`Salario: ${ err }`);
        } else {
            console.log(`Salario: ${ salario.monto }`);
        }
    })

})