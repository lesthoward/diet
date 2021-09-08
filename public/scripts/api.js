// let abortController = new AbortController()
// const signal = abortController.signal
const url = window.location.origin + '/usuarios'

const obtenerDatos = async (id='') => {
    try {
        const solicitud = await fetch(url + `/${id}`)
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
            body: JSON.stringify(usuario)
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
        window.location.href = '/pages/administrarDietas.html'
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