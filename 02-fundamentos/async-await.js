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

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
    const salario = await getSalario (id);
    return `
        ID: ${ empleado.id }
        Nombre: ${ empleado.nombre }
        Salario: ${ salario.monto }
    `;
    } catch (error) {
        throw error;
    }
}

const id = 13;
getInfoUsuario(id)
       .then( msg => console.log(msg) )
       .catch( err => console.log(err) );
