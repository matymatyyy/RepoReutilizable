window.addEventListener("load" , function(){
    const botonConsulta= document.getElementById("consultar");
    const botonCarga= document.getElementById("cargar");
    const botonModificar = document.getElementById("modificar");

    botonCarga.addEventListener("click", function(){
        location.href = "./templates/cargar.html";
    })

    botonConsulta.addEventListener("click", function(){
        location.href = "./templates/consultar.html";
    })

    botonModificar.addEventListener("click", function(){
        location.href = "./templates/modificar.html"
    })
})