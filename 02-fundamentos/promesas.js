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

/* const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject ) => {
        const empleado = empleados.find( (e) => e.id === id );
        if (empleado) {
            resolve( empleado );
        } else {
            reject(`Empleado con id ${ id } no existe`);
        }
    } )
    return promesa;
} */

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject ) => {
        const empleado = empleados.find( (e) => e.id === id );
        // if simplificado
        (empleado) 
            ? resolve( empleado ) 
            : reject(`Empleado con id ${ id } no existe`);
    } )
    return promesa;
}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject ) => {
        const salario = salarios.find( (s) => s.id === id );
        // if simplificado
        (salario) 
            ? resolve( salario ) 
            : reject(`Salario: Aún no tiene asignado`);
    } )
    return promesa;
}

const id = 2;

/*
getEmpleado(id)
       .then(empleado => 
        {
            console.log(`ID: ${empleado.id}`);
            console.log(`Nombre: ${empleado.nombre}`);
            getSalario(id)
                .then(salario => console.log(`Salario: ${salario.monto}`))
                .catch( err => console.log( `Salario: ${ err}`) );
        } )
       .catch( err => console.log( err ) );
       */

// Promesas encadenadas

getEmpleado(id)
        .then( empleado => {
            console.log(`ID: ${empleado.id}`);
            console.log(`Nombre: ${empleado.nombre}`);
            return getSalario( id )
        } )
        .then( salario  => { 
            console.log(`Salario: ${salario.monto}`);
        })
        .catch( err => console.log( err) );