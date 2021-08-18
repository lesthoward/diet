import * as ejecutar from '../funciones.js'
import {EfectosFormularios, CamposFormularios} from '../classes/formulario.js'

const EscucharEventos = () => {
    // Con este método cancelo la ejecución del programa al presionar los eventos, exeptuando el de "submit"; en caso de enviar formulario a la base de datos.
    ejecutar.cancelarEventosBotones()
}
EscucharEventos ()

// Objeto de los detalles del usuario
const usuario = {
    nombre: '',
    apellidos: '',
    edad: '',
    correo: '',
    pass: ''
}

let pasosFormularios = 0
const todosFormularios = document.querySelectorAll('.formulario__pasos');

// Intancias de las dos clases de efectos y campos
const efectosFormularios = new EfectosFormularios()
const camposFormularios = new CamposFormularios()

// Tomar el formulario en que se encuentra el usuario, de todos los 8+
todosFormularios.forEach((formularioUnico, indice) => {
    if(pasosFormularios === indice) {
        formularioActual(formularioUnico, indice)
    }
})

// Debido al diseño es necesario identificar el formulario que está viendo el usuario. Para tomar sus botones e inputs por separado.
function formularioActual (formularioUnico, pasosFormulario) {
    const btnSiguiente = formularioUnico.querySelector('.formulario__siguiente')
    formularioUnico.addEventListener('input',(e) => {
        // Completo los campos del objeto desde la clase externa
        camposFormularios.completarObjeto(e, usuario)
        const {nombre, apellidos, edad, correo, pass} = usuario

        if(nombre !== '', apellidos !== '', edad !== '', 
            correo !== '', pass !== '') {
            btnSiguiente.classList.remove('formulario__boton--desactivado')
            btnSiguiente.addEventListener('click', () => {
            
            })
        } else {
            btnSiguiente.classList.add('formulario__boton--desactivado')
        }
    })
}