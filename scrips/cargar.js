window.addEventListener("load", function(){
    const BotonVolver= document.getElementById("volver");
    const botonCargar= document.getElementById("cargar");
    const inputNombre=document.getElementById("name");
    const inputMateria= document.getElementById("progra");
    const inputNota= document.getElementById("mate");
    const texto= document.getElementById("texto");
    const inputDni = document.getElementById("DNI");
    const inputMail = document.getElementById("mail");

    var lista={};
    lista=baseDato();
    console.log(lista);
    
    BotonVolver.addEventListener("click", function() {
        location.href = "../index.html"
    })

    botonCargar.addEventListener("click", function() {
        var alumno = {
            "info":{
                "nombre": inputNombre.value,
                "mail": inputMail.value,

            },
            "materias": {
                "Programacion": [],
                "Matematica": [],
                "Sistemas": []
            }
        }
        if (inputDni.value=="") {
            texto.innerHTML = "No completaste el DNI";
        }else{
            if (lista[inputDni.value]) {
                NotaPush();
                cargaDB();
            }else if(inputMail.value==""){
                texto.innerHTML="ingresa un mail";
            }else if(inputNombre.value== ""){
                texto.innerHTML= "ingrese un nombre";
            }
            else{
                texto.innerHTML= "ingreso el pibe:"+inputNombre.value;
                lista[inputDni.value] = alumno;
                NotaPush();
                cargaDB();
            }
            
        }
        
    })

    function NotaPush() {
        lista[inputDni.value]["materias"][inputMateria.value].push(inputNota.value);
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