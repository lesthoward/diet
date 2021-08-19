const urlCompleta = window.location.search
const parametros = new URLSearchParams(urlCompleta)
const userID = parametros.get('id')

import {obtenerDatos} from '../api.js'

obtenerUsuarioIndividual ()
async function obtenerUsuarioIndividual () {
    const datos = await obtenerDatos(userID)
    completarCampos (datos)
}

function completarCampos (usuarioEspecifico) {
    const etiquetas = document.querySelectorAll('small')
    const textoArea = document.querySelector('.mensaje__textarea');
    etiquetas.forEach(etiquetaUnica => {
        if(etiquetaUnica.id) {
            console.log(usuarioEspecifico.id);
            etiquetaUnica.textContent = usuarioEspecifico[etiquetaUnica.id]
        }
    })
    textoArea.innerHTML = usuarioEspecifico.mensajeNutrologo


}