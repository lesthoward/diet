const url = 'http://localhost:3080/usuarios'
let abortController = new AbortController()

const obtenerDatos = async () => {
    try {
        const solicitud = await fetch(url)
        const data = await solicitud.json()
        console.log(data);
        
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

export {
    obtenerDatos,
    enviarUsuariosJSON
}