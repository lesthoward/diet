
class Documento {
    pintarElementos(elementos) {
        const contenedorElementos = document.querySelector('.envoltura__contenedor');
        contenedorElementos.innerHTML = ''
        const fragment = document.createDocumentFragment()
        elementos.forEach(elemento => {
            const divUsuario = document.createElement('div')
            divUsuario.className = 'usuario'
            divUsuario.id = elemento.id
            divUsuario.innerHTML = `
                <div class="usuario__info">
                    <div class="usuario__encabezado">
                        <h3 class="usuario__nombre">${elemento.nombre}</h3>
                    </div>
                    <!-- usuario__superior -->
                    <div class="usuario__parrafos">
                        <p class="usuario__parrafo">Correo: 
                            <small class="usuario__datos">${elemento.correo}</small>
                        </p>
                        <p class="usuario__parrafo">Objetivo: 
                            <small class="usuario__datos">${elemento.objetivo}</small>
                        </p>
                        <p class="usuario__parrafo">Estado respuesta: 
                            <small class="usuario__datos respuesta">${elemento.respuesta ? elemento.respuesta : 'sin respuesta'}</small>
                        </p>
                    </div>
                    <!-- usuario__parrafos -->
                </div>
                <!-- usuario__info -->
                
                <div class="usuario__acciones">
                    ${elemento.superUsuario ? '' : '<button class="usuario__responder">Responder</button>'}
                    ${elemento.superUsuario ? '' : '<button class="usuario__eliminar">Eliminiar registro</button>'}
                </div>
                <!-- usuario__acciones -->
            `
            fragment.appendChild(divUsuario)
        })
        contenedorElementos.appendChild(fragment)
    }

     eliminarElementosAnteriores () {
        const contenedorElementos = document.querySelector('.envoltura__contenedor');
        while(contenedorElementos.firstChild) {
            contenedorElementos.removeChild(contenedorElementos.firstChild)
        }
    }
}

// Instaciar documento para mejor control con POO
export {
    Documento
}