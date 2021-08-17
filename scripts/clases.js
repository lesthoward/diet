const formularios = document.querySelectorAll('.formulario__pasos');
class Formulario {
    constructor() {
        this.pasosFormulario = 0
    }
    formularioSiguiente() {
        // Math para formatear el número negativo, y luego delimitar el traslado de lo formularios con los estilos css.
        if(Math.abs(this.pasosFormulario) < formularios.length - 1) {
            this.pasosFormulario += -1
        }
        return this.pasosFormulario;
        
    }
    formularioAnterior() {
        if(Math.abs(this.pasosFormulario) > 0) {
            this.pasosFormulario += 1
        }
        return this.pasosFormulario;
    }
}

class FormularioDocumento {
    trasladarFormulario(pasosFormulario) {
        console.log(pasosFormulario);
        formularios.forEach((formulario) => {
            formulario.style.transform = `translate(${pasosFormulario}00%)`
        })
    }
}

export {
    Formulario,
    FormularioDocumento
}