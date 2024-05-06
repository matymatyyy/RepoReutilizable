window.addEventListener("load" , function(){
    const botonConsulta= document.getElementById("consultar");
    const botonCarga= document.getElementById("cargar");
    const listaRecuperadaJSON = localStorage.getItem('personas');
    const listaRecuperada = JSON.parse(listaRecuperadaJSON);
    console.log(listaRecuperada);

    botonCarga.addEventListener("click", function(){
        location.href = "./templates/cargar.html";
    })

    botonConsulta.addEventListener("click", function(){
        location.href = "./templates/consultar.html";
    })
})