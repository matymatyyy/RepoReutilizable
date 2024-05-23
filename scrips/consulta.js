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
        texto.innerHTML="";
        if (lista[pibe.value]) {
            var a=lista[pibe.value]["materias"][materia.value];
            var contador = 0;
            for (let i = 0; i < a.length; i++) {
                contador+=parseInt(a[i]);
            }
            resultado = contador / a.length;
            if (resultado >= 6) {
                texto.innerHTML += `${lista[pibe.value]["info"]["nombre"]}, aprobo ${materia.value} con ${resultado} `
            } else {
                if(isNaN(resultado)){
                    texto.innerHTML += `este pibe no tiene notas en ${materia.value}`
                }else{
                   
                    texto.innerHTML += `${lista[pibe.value]["info"]["nombre"]}, desaprobo ${materia.value} con ${resultado}`    
                }  
            }
        }else{
            texto.innerHTML = `No existe ${lista[pibe.value]["info"]["nombre"]}`
        }
    });
})