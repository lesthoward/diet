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


async function confimarAlerta () {
    let estado = false
    await Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás recuperar este registro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            estado = true
        }
      })
      return estado
}


function mostrarExito (titulo='¡Eliminado!', desc='El registro fue elimidado', estado='success') {
    Swal.fire(
        titulo,
        desc,
        estado
    )
}

function darFormatoCSS (respuesta) {
    respuesta.forEach(res => {
        if(res.textContent !== 'sin respuesta') {
            res.classList.add('respuesta--mostrar')
        }
    })
}

export  {
    cancelarEventosBotones,
    comprobarCamposObjeto,
    confimarAlerta,
    mostrarExito,
    darFormatoCSS
}