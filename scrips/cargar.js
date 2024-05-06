window.addEventListener("load", function(){
    const BotonVolver= document.getElementById("volver");
    const botonCargar= document.getElementById("cargar");
    const inputNombre=document.getElementById("name");
    const inputMateria= document.getElementById("progra");
    const inputNota= document.getElementById("mate");
    const texto= document.getElementById("texto");

    var lista={};
    lista=baseDato();
    console.log(lista);
    
    BotonVolver.addEventListener("click", function() {
        location.href = "../index.html"
    })

    botonCargar.addEventListener("click", function() {
        var alumno = {
            "materias": {
                "Programacion": [],
                "Matematica": [],
                "Sistemas": []
            }
        }
        if (inputNombre.value=="") {
            texto.innerHTML = "No completaste el nombre";
        }else{
            if (lista[inputNombre.value]) {
                NotaPush();
                cargaDB();
            }else{
                texto.innerHTML= "ingreso el pibe:"+inputNombre.value;
                lista[inputNombre.value] = alumno;
                NotaPush();
                cargaDB();
            }
            
        }
        
    })

    function NotaPush() {
        lista[inputNombre.value]["materias"][inputMateria.value].push(inputNota.value);
    }

    function baseDato(){
        if (localStorage.getItem("personas")) {
            let alumno= localStorage.getItem("personas");
            let listaRecuperada = JSON.parse(alumno);
            return listaRecuperada;
        }
        const listaJSON = JSON.stringify(lista);
        localStorage.setItem("personas", listaJSON);
    }

    function cargaDB() {
        var listaJSON = JSON.stringify(lista);
        localStorage.setItem("personas", listaJSON);
    }
})