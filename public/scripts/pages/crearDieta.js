import * as ejecutar from '../funciones.js'
import {EfectosFormularios, CamposFormularios} from '../classes/formulario.js'
import { enviarUsuariosJSON } from '../api.js'

// Intancias de las dos clases de efectos y campos
const efectosFormularios = new EfectosFormularios()
const camposFormularios = new CamposFormularios()

const EscucharEventos = () => {
    // Con este método cancelo la ejecución del programa al presionar los eventos, exeptuando el de "submit"; en caso de enviar formulario a la base de datos.
    ejecutar.cancelarEventosBotones()
}
EscucharEventos ()

// Objeto de los detalles del usuario
let usuario = {
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
    adiccion: 'sin adicciones',
    consumoAgua: 'sin mensaje adicional',
    mensajeAdicional: 'sin mensaje adicional'
}
// ! Traslado de formulario manual, solo en desarrollo.
let pasosFormularios = 0
const todosFormularios = document.querySelectorAll('.formulario__pasos');

// ! Traslado de formulario manual, solo en desarrollo.
// efectosFormularios.trasladarSiguiente()

// Tomar el formulario en que se encuentra el usuario, de todos los 8+
tomarFormularioActual()
function tomarFormularioActual () {
    todosFormularios.forEach((formularioUnico, indice) => {
        if(pasosFormularios === indice) {
            formularioActual(formularioUnico)
        }
    })
}

// Debido al diseño es necesario identificar el formulario que está viendo el usuario. Para tomar sus botones e inputs por separado.
function formularioActual (formularioUnico) {
    if (pasosFormularios === 0) {
        datosPersonalesFormulario (formularioUnico)
    }

    if(pasosFormularios === 1) {
        medidasCorporalesFormulario(formularioUnico)
    }

    if(pasosFormularios === 2) {
        objetivosFisicosFormulario(formularioUnico)
    }

    if(pasosFormularios === 3) {
        tipoCuerpoFormulario(formularioUnico)
    }

    if(pasosFormularios === 4) {
        tipoTrabajoFormulario(formularioUnico)
    }

    if(pasosFormularios === 5) {
        frecuenciaFisicaFormulario(formularioUnico)
    }

    if(pasosFormularios === 6) {
        actividadFisicaFormulario(formularioUnico)
    }

    if(pasosFormularios === 7) {
       adiccionesFormulario(formularioUnico)
    }

    if(pasosFormularios === 8) {
       consumoAguaFormulario(formularioUnico)
    }

    if(pasosFormularios === 9) {
       mensajeAdicionalFormulario(formularioUnico)
    }

}

// ! Funcionalidad de siguiente
function funcionalidadSiguiente (btnContinuar=true) {
    if(btnContinuar) {
        efectosFormularios.trasladarSiguiente()
        // Subo de indice y vuelvo a tomar mi formulario actual
        pasosFormularios++
        tomarFormularioActual()
    }
    
}

async function enviarFormulario () {
    console.log(usuario);
    await enviarUsuariosJSON(usuario)
    window.location.href = '/'
    document.querySelector('.formulario__envoltura').innerHTML = `
    <div class="formulario__pasos formulario__enviar">
        <div class="formulario__info">
            <h2 class="formulario__titulo">GRACIAS POR ELEGIRNOS.</h2>
            <p class="formulario__descripcion">Uno de nuestros asesores nutricionistas revisará tu caso y te guiará en tu progreso de <strong>${usuario.objetivo}</strong> para que cumplas con tus objetivos</p>
            <p>Notificaremos en tu correo : <strong>${usuario.correo}</strong></p>
        </div>

        <div class="notificacion">
            <img class="notificacion__img" src="../images/happy.svg">
        </div>
        <a href="#" class="notificacion__link" target="_blank">Ir a LinkedIn</a>
    </div>
    `
    const mensajeFinal = document.querySelector('.formulario__enviar')
    mensajeFinal.style.display = 'block'
}

function mensajeAdicionalFormulario (formularioUnico) {
    const btnEnviar = formularioUnico.querySelector('.formulario__enviar')
    formularioUnico.addEventListener('input',(e) => {
        if(e.target.classList.contains('mensaje__textarea')) {
            const tituloObjetivo = e.target.value.toLowerCase()
            usuario.mensajeAdicional = tituloObjetivo
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })

    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault()
        enviarFormulario()
    })
}

function consumoAguaFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('click',(e) => {
        if(e.target.classList.contains('objetivo')) {
            const tituloObjetivo = e.target.querySelector('.objetivo__titulo').textContent.toLowerCase()
            usuario.consumoAgua = tituloObjetivo
            funcionalidadSiguiente(true)
           
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}


function adiccionesFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('input',(e) => {
        if(e.target.classList.contains('completar__input')) {
            const tituloObjetivo = e.target.value.toLowerCase()
            usuario.adiccion = tituloObjetivo
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
        
    })

    const btnSiguiente = formularioUnico.querySelector('.formulario__siguiente')
    btnSiguiente.addEventListener('click', () => {
        funcionalidadSiguiente(true)
    })
}

function actividadFisicaFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('click',(e) => {
        if(e.target.classList.contains('cuadro')) {
            const tituloObjetivo = e.target.querySelector('.cuadro__titulo').textContent.toLowerCase()
            usuario.actividadFisica = tituloObjetivo
            funcionalidadSiguiente(true)
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}

function frecuenciaFisicaFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('click',(e) => {
        if(e.target.classList.contains('objetivo')) {
            const tituloObjetivo = e.target.querySelector('.objetivo__titulo').textContent.toLowerCase()
            usuario.frecuenciaFisica = tituloObjetivo
            funcionalidadSiguiente(true)
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}

function tipoTrabajoFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('click',(e) => {
        if(e.target.classList.contains('cuadro')) {
            const tituloObjetivo = e.target.querySelector('.cuadro__titulo').textContent.toLowerCase()
            usuario.tipoTrabajo = tituloObjetivo
            funcionalidadSiguiente(true)
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}

function tipoCuerpoFormulario (formularioUnico ) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('click',(e) => {
        if(e.target.classList.contains('cuerpo__envoltura')) {
            const tituloObjetivo = e.target.querySelector('.cuerpo__titulo').textContent.toLowerCase()
            usuario.tipoCuerpo = tituloObjetivo
            funcionalidadSiguiente(true)
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}


function objetivosFisicosFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    formularioUnico.addEventListener('click',(e) => {
        if(e.target.classList.contains('objetivo')) {
            e.target.classList.add('objetivo--active')
            const tituloObjetivo = e.target.querySelector('.objetivo__titulo').textContent.toLowerCase()
            usuario.objetivo = tituloObjetivo
            funcionalidadSiguiente(true)
        }
    })
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}


function medidasCorporalesFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    const btnSiguiente = formularioUnico.querySelector('.formulario__siguiente')
    const btnAtras = formularioUnico.querySelector('.formulario__atras');
    let btnContinuar;
    formularioUnico.addEventListener('input',(e) => {
        // Completo los campos del objeto desde la clase externa
        camposFormularios.completarObjeto(e, usuario.medidasCorporales)
        
        const camposCompletados = ejecutar.comprobarCamposObjeto(usuario.medidasCorporales)
        if(camposCompletados) {
            btnSiguiente.classList.remove('formulario__boton--desactivado')
            btnContinuar = true
        } else {
            btnSiguiente.classList.add('formulario__boton--desactivado')
            btnContinuar = false
        }
    })

    btnSiguiente.addEventListener('click', () => {
        funcionalidadSiguiente(btnContinuar)
    })

    btnAtras.addEventListener('click', () => {
        efectosFormularios.trasladarAtras()
    })
}


function datosPersonalesFormulario (formularioUnico) {
    camposFormularios.corregirTabError(formularioUnico)

    const btnSiguiente = formularioUnico.querySelector('.formulario__siguiente')
    let btnContinuar;
    formularioUnico.addEventListener('input',(e) => {
        // Completo los campos del objeto desde la clase externa
        camposFormularios.completarObjeto(e, usuario)

        // Desactivar o activar botón cuando se escribe en los formularios
        const {nombre, apellidos, edad, correo, pass} = usuario
        if(nombre !== '', apellidos !== '', edad !== '', 
        correo !== '', pass !== '') {
            btnSiguiente.classList.remove('formulario__boton--desactivado')
            btnContinuar = true
        } else {
            btnSiguiente.classList.add('formulario__boton--desactivado')
            btnContinuar = false
        }
    })

    btnSiguiente.addEventListener('click', () => {
        if(btnContinuar) {
            efectosFormularios.trasladarSiguiente()
            // Subo de indice y vuelvo a tomar mi formulario actual
            pasosFormularios++
            tomarFormularioActual()
        }
    })
}