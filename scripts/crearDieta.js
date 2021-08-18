import {Formulario, FormularioDocumento} from '../scripts/clases.js' 

const pasosFormularioManual = 0
const formulariosContenedor = document.querySelector('.formulario__envoltura');
const formulario = new Formulario(pasosFormularioManual);
const formularioDocumento = new FormularioDocumento();
// Cargar formulario por defecto
formularioDocumento.trasladarFormulario(pasosFormularioManual)



const eventosFormulario = (e) => {
    e.preventDefault();
    const objetivo = e.target 
    // Si el boton siguiente es presionado llama a mi clase de formulario con eventos y la formulario para pintar en el documento
    if(objetivo.classList.contains('formulario__siguiente')) {
        const pasos = formulario.formularioSiguiente()
        formularioDocumento.trasladarFormulario(pasos)
    }

    if(objetivo.classList.contains('formulario__atras')) {
        const pasos = formulario.formularioAnterior()
        formularioDocumento.trasladarFormulario(pasos)
    }
}
// Efecto para trasladar el formulario
formulariosContenedor.addEventListener('click', eventosFormulario)







// personaObj = {
//     id: Date.now(),
//     nombre: 'Wilmer',
//     apellido: 'Howard',
//     pass: '123456',
//     correo: 'wilmer@hispanoamericana.com',
//     edad: 22,
//     medidasCuerpo: {
//         pecho: '',
//         hombros: '',
//         biceps: '',
//         cintura: '',
//         gluteo: '',
//         piernas: ''
//     },
//     objetivo: 'ganar peso',
//     tipoCuerpo: 'ectomorfo',
//     tipoTrabajo: 'oficina',
//     tipoActividades: 'correr',
//     tipoActividadesFrecuencia: '3 veces a la semana',
//     adiccion: 'fumar',
//     adiccionFrecuencia: 'diario',
//     limitacionFisica: 'Asma',
//     consumoDiarioAgua: '1L',
//     comentariosAdicionales: '',
//     recomendaciones: 'Tienes que tomar más carbohidratos'
// }