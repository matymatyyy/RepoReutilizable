window.addEventListener("load", function() {
    const botonVovler = document.getElementById("volver");
    const botonModificar = document.getElementById("modificar");
    const contenido = document.getElementById("contenido");
    const contenido1 = document.getElementById("contenido1");
    const botonCancelar = document.getElementById("cancelar");
    const inputDni = document.getElementById("dni");
    const texto = document.getElementById("texto");
    const inputNombre = document.getElementById("name");
    const inputGmail = document.getElementById("mail");
    const botonActualizar = document.getElementById("actualizar");
    const resultado = document.getElementById("resultado");
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
            texto.innerHTML =  "La persona elegida es "+lista[inputDni.value]["info"]["nombre"]+"<br>";
            texto.innerHTML +="sus datos son : gmail:"+lista[inputDni.value]["info"]["mail"];
        }else{
            texto.innerHTML = "no existe el pibe"
        }
        
    })

    botonCancelar.addEventListener("click", function() {
        location.href = "";
    })

    botonActualizar.addEventListener("click", function() {
        resultado.innerHTML = ""
        if (inputGmail.value=="") {
            resultado.innerHTML+= "no se actualizo mail";
        }else{
            lista[inputDni.value]["info"]["mail"]=inputGmail.value;
            resultado.innerHTML+= "se actualizo el mail a :"+inputGmail.value;
        }

        if(inputNombre.value==""){
            resultado.innerHTML+= "no se actualizo nombre";
        }else{
            lista[inputDni.value]["info"]["nombre"]=inputNombre.value;
            resultado.innerHTML+= "se actualizo el nombre a :"+inputNombre.value;
        }
        cargaDB()
        console.log(lista);
    })

    function cargaDB() {
        var listaJSON = JSON.stringify(lista);
        localStorage.setItem("personas", listaJSON);
    }
})