// let abortController = new AbortController()
// const signal = abortController.signal
const url = 'http://localhost:3000/usuarios'

const obtenerDatos = async (id='') => {
    try {
        const solicitud = await fetch(url+'/'+id)
        const data = await solicitud.json()
        console.log(data);
        return data
        
    } catch (error) {
        console.log(error);
    }
}

const enviarUsuariosJSON = async (usuario) => {
    try {
        await fetch(url, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(usuario),
            signal: signal
        })
        

    } catch (error) {
        console.log(error);
    }
}

const eliminarUsuariosJSON = async (userId) => {
    try {
        await fetch(`${url}/${userId}`, {
            method: 'DELETE'
        }) 
    } catch (error) {
        console.log(error);
    }
}

const actualizarUsuarioJSON = async (usuario, userId) => {
    try {
        await fetch(`${url}/${userId}`, {
            method: 'PATCH',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(usuario),
            signal: signal

        }).then((e) => {
            console.log(e);
        })
        window.location.href = '/'
    } catch (error) {
        console.log(error);
    }
}

export {
    obtenerDatos,
    enviarUsuariosJSON,
    eliminarUsuariosJSON,
    actualizarUsuarioJSON
}