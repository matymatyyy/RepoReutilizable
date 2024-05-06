window.addEventListener("load", function() {
    const listaRecuperadaJSON = localStorage.getItem('personas');
    const listaRecuperada = JSON.parse(listaRecuperadaJSON);
    console.log(listaRecuperada);

    
})