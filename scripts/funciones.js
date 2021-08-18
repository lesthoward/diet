const cancelarEventosBotones = () => {
    const botonesGenerales = document.querySelectorAll(':not(.formulario__enviar).formulario__boton');
    botonesGenerales.forEach(boton => {
        boton.addEventListener('click', (e) => e.preventDefault())
    })
}

export  {
    cancelarEventosBotones
}