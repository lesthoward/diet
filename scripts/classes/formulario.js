class EfectosFormularios {
    constructor() {
        this.traslado = 100
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