window.addEventListener("load", function() {
    const listaRecuperadaJSON = localStorage.getItem('personas');
    var lista = JSON.parse(listaRecuperadaJSON);
    console.log(lista);

    const botonConsulta = document.getElementById("botonConsulta");
    const texto = document.getElementById("texto");
    const pibe = document.getElementById("nombre");
    const materia = document.getElementById("materia");
    const paraAtra = document.getElementById("seVuelve");

    paraAtra.addEventListener("click", function() {
        location.href = "../index.html";
    });

    botonConsulta.addEventListener("click", function(){
        if (lista[pibe.value]) {
            var a=lista[pibe.value]["materias"][materia.value];
            var contador = 0;
            for (let i = 0; i < a.length; i++) {
                contador+=parseInt(a[i]);
            }
            resultado = contador / a.length;
            if (resultado >= 6) {
                texto.innerHTML += `${pibe.value} aprobo con ${resultado}`
            } else {
                texto.innerHTML += `${pibe.value} desaprobo con ${resultado}`   
            }
        }else{
            texto.innerHTML = `No exoiste ${pibe.value}`
        }
    });
})