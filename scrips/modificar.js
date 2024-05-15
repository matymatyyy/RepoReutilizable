window.addEventListener("load", function() {
    const botonVovler = document.getElementById("volver");
    const botonModificar = document.getElementById("modificar");
    const contenido = document.getElementById("contenido");
    const contenido1 = document.getElementById("contenido1");
    const botonCancelar = document.getElementById("cancelar");
    const inputDni = document.getElementById("dni");
    const texto = document.getElementById("texto");
    contenido.style.display = "none";
    const listaRecuperadaJSON = localStorage.getItem('personas');
    var lista = JSON.parse(listaRecuperadaJSON);
    console.log(lista);


    botonVovler.addEventListener("click", function(){
        location.href = "../index.html"
    })

    botonModificar.addEventListener("click", function() {
        if (lista[inputDni.value]) {
            contenido1.style.display = "none";
            contenido.style.display = "block";
            texto.innerHTML =  lista[inputDni.value]["info"]["nombre"]
            if ("") {
                
            }else if(""){

            }
        }else{
            texto.innerHTML = "no existe el pibe"
        }
        
    })

    botonCancelar.addEventListener("click", function() {
        location.href = "";
    })
})