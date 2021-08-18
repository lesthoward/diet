import {Formulario, FormularioDocumento} from '../scripts/clases.js' 

// Cargar pasos de formulario manualmente
const pasosFormularioManual = 0
const formulariosContenedor = document.querySelector('.formulario__envoltura');
const formulario = new Formulario(pasosFormularioManual);
const formularioDocumento = new FormularioDocumento();
formularioDocumento.trasladarFormulario(pasosFormularioManual)

let pasosFormulario

// Llamar las clases que interáctuan con los efectos del formulario
const trasladarFormulario = (e) => {
    e.preventDefault();
    const objetivo = e.target 
    // Si el boton siguiente es presionado llama a mi clase de formulario con eventos y la formulario para pintar en el documento
    if(objetivo.classList.contains('formulario__siguiente')) {
        pasosFormulario = formulario.formularioSiguiente()
        formularioDocumento.trasladarFormulario(pasosFormulario)
    }

    if(objetivo.classList.contains('formulario__atras')) {
        pasosFormulario = formulario.formularioAnterior()
        formularioDocumento.trasladarFormulario(pasosFormulario)
    }
}

const usuario = {
    id: Date.now(),
    nombre: '',
    apellidos: '',
    edad: '',
    correo: '',
    pass: '',
    medidasCorporales: {
        altura: '',
        pectoral: '',
        biceps: '',
        antebrazo: '',
        cintura: '',
        gluteos: '',
        piernas: '',
        hombros: '',
        peso: ''
    },
    objetivo: '',
    tipoCuerpo: '',
    tipoTrabajo: '',
    frecuenciaFisica: '',
    actividadFisica: '',
    adicciones: '',
    consumoAgua: '',
    mensaje: ''
}
// Elegir todos los diferentes formularios
const usuarioFormulario = document.querySelectorAll('.formulario__pasos');



const formulariosIndividuales = (formularioIndividual, pasos) => {
    if(pasos === 0) {
        formulario.datosPersonales(formularioIndividual)
    }
}

const comprobarFormulario = () => {
    usuarioFormulario.forEach((formulario, index) => {
        const pasos = 0 | Math.abs(pasosFormulario) 
        if(pasos === index) {
            formulariosIndividuales(formulario, pasos)
        }
    })
}  
comprobarFormulario()  

// * Efecto para trasladar el formulario
formulariosContenedor.addEventListener('click', (e) => {
    trasladarFormulario(e)
    comprobarFormulario(e)
})