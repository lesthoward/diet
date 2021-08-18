import { EfectosFormularios } from "./classes/formulario.js";
const efectosFormularios = new EfectosFormularios


// Los botones en los formularios lo envían por defecto, con esto quito esa acción
const cancelarEventosBotones = () => {
    const botonesGenerales = document.querySelectorAll('.formulario__boton');
    botonesGenerales.forEach(boton => {
        boton.addEventListener('click', (e) => e.preventDefault())

    })
}

// La varialbe lo dice
function comprobarCamposObjeto (objeto) {
    const esteObj = objeto
    return Object.values(esteObj).every((obj) => {
        return obj !== ''
    })
}


export  {
    cancelarEventosBotones,
    comprobarCamposObjeto,
}