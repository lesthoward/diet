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

    corregirTabError(formularioUnico) {
        const areaTexto = document.querySelector('textarea')
        areaTexto.setAttribute('tabindex', '-1')

        const camposFormularioGlobal = document.querySelectorAll('input')
        camposFormularioGlobal.forEach(campo => {
            campo.setAttribute('tabindex', '-1')
        })
        
        const camposFormularioLocal = formularioUnico.querySelectorAll('input')
        camposFormularioLocal.forEach(campo => {
            campo.setAttribute('tabindex', '0')
        })
    }
}


export {
    EfectosFormularios,
    CamposFormularios
}