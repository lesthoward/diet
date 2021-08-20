import {obtenerDatos} from '../api.js'
import { mostrarExito } from '../funciones.js';
const formulario = document.querySelector('.formulario__pasos');
let usuarios = []

formulario.addEventListener('click', (e) => {

    if(e.target.classList.contains('formulario__siguiente')) {
        comprobarUsuarioBaseDatos (e)
    }

    
})



function comprobarUsuarioBaseDatos (e) {
    e.preventDefault()

    const correo = document.querySelector('#correo').value.trim().toLowerCase()
    const pass = document.querySelector('#pass').value.trim().toLowerCase()
    let estadoPerfil = false
    let superUsuario = false
    let userID;

    if(!estadoPerfil) {
        
        if(correo === '' || pass === '' ) {
            mostrarExito('¡404!', 'No puedes dejar espacios en blanco', 'error')
            return
        }
        

        const usuarioEncontrado = usuarios.filter(usuarioUnico => {
            if(usuarioUnico.correo === correo && usuarioUnico.pass === pass) {
                userID = usuarioUnico.id
                superUsuario = usuarioUnico.superUsuario
                return usuarioUnico
            }
        })
        if(!usuarioEncontrado.length) {
            mostrarExito('¡404!', 'Esta cuenta no está registrada', 'error')
            return
        } else {
            estadoPerfil = true
        }
    }
    
    if(estadoPerfil) {
        if(!superUsuario) {  
            window.location.href = `./perfil.html?id=${userID}`
        } else {
            window.location.href = `./administrarDietas.html`
        }   


    }
}

async function registroUsuariosJSON () {
    usuarios = await obtenerDatos()
    console.log(usuarios);
}
registroUsuariosJSON () 