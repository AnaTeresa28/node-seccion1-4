let getUsuarioId = (id, callback) => {
    let usuario = {
        nombre: 'AnaTeresa',
        id
    }

    if ( id === 12) {
        callback(`El usuario con id ${ id }, no existe en BD`);
    }else {
        callback(null, usuario);
    }
}

getUsuarioId(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});