import { actualizarUsuarioJSON, eliminarUsuariosJSON, obtenerDatos } from "../api.js";
import { Documento } from "../classes/administrarDietas.js";
import { confimarAlerta, darFormatoCSS, mostrarExito} from "../funciones.js";

const contenedorElementos = document.querySelector('.envoltura__contenedor');
const documento = new Documento()
let respuesta = false

async function cargarVista () {
    // Borrar el contenido previo de los campos con información
    const datoUsuario = {}
    completarCamposRespuesta (datoUsuario)
    
    const listaUsuarios = document.querySelector('.envoltura')
    const darRespuesta = document.querySelector('.envoltura__nutricionista')
    if(respuesta === false) {
        listaUsuarios.style.display = 'block'
        darRespuesta.style.display = 'none'
        const datosArr = await obtenerDatos()
        documento.pintarElementos(datosArr)
        darFormatoCSS(document.querySelectorAll('.respuesta'))
    } else {
        listaUsuarios.style.display = 'none'
        darRespuesta.style.display = 'block'
    }
}
cargarVista()

// Interactura sobre la lista de los registros
contenedorElementos.addEventListener('click', async (e) => {
    if(e.target.classList.contains('usuario__eliminar')) {
        // Mostrar la alerta antes, es de tipo asíncrona
        const estadoContinuar = await confimarAlerta()
        if(estadoContinuar) {
            const userId = Number(e.target.parentElement.parentElement.id)
            documento.eliminarElementosAnteriores()
            await eliminarUsuariosJSON(userId)
            const datosArr = await obtenerDatos()
            documento.pintarElementos(datosArr)
            mostrarExito()
        }


        
    }

    if(e.target.classList.contains('usuario__responder')) {
        // La repuesta define la vista que se piensa cargar
        respuesta = true
        const userId = Number(e.target.parentElement.parentElement.id)
        const datoUsuario = await obtenerDatos(userId)
        cargarVista()
        completarCamposRespuesta (datoUsuario)
        habilitarDarRespuesta (userId)
        
    }

})


function habilitarDarRespuesta (userId) {
    const btnRegresar = document.querySelector('.mensaje__regresar');
    btnRegresar.addEventListener('click', () => {
        respuesta = false
        cargarVista()
    })

    const btnEnviar = document.querySelector('.mensaje__enviar'); 
    btnEnviar.addEventListener('click', async () => {
        const mensajeNutrologo = document.querySelector('.mensaje__textarea').value
        const usuarioObj = {
            mensajeNutrologo,
            respuesta: 'completado'
        }
        actualizarUsuarioJSON({...usuarioObj}, userId)
        respuesta = false
        cargarVista()
        mostrarExito('Edición' ,'El registro fue modificado exitosamente')
    })

}

function completarCamposRespuesta (datoUsuario) {
    const textArea = document.querySelector('.mensaje__textarea');
    const etiquetas = document.querySelectorAll('small')
    etiquetas.forEach(etiquetaUnica => {
        if(etiquetaUnica.id) {
            etiquetaUnica.textContent = datoUsuario[etiquetaUnica.id]
        }
    })

    if(textArea) {
        textArea.value = ''
    }
}





