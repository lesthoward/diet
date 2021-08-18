const todosFormularios = document.querySelectorAll('.formulario__pasos');

class EfectosFormularios {
    constructor() {
        this.traslado = 0
    }

    trasladarSiguiente() {
        this.traslado += -100
        todosFormularios.forEach(cadaFormulario => {
            cadaFormulario.style.transform = 'translate('+ this.traslado +'%)'
        })
    }

    trasladarAtras() {
        this.traslado += 100
        todosFormularios.forEach(cadaFormulario => {
            cadaFormulario.style.transform = 'translate('+ this.traslado +'%)'
        })
        
    }
}

class CamposFormularios {
    completarObjeto({target}, usuario) {
        usuario[target.id] = target.value
    }
}


export {
    EfectosFormularios,
    CamposFormularios
}