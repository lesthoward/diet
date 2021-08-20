const url = 'http://localhost:3000/usuarios'
let abortController = new AbortController()

const obtenerDatos = async (id='') => {
    try {
        const solicitud = await fetch(url+'/'+id)
        const data = await solicitud.json()
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
            signal: abortController.signal
        }).then(() => {
            // window.onbeforeunload = (e) => {console.log(e);}
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
            body: JSON.stringify(usuario)
        }) 
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