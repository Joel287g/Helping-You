var log = console.log;

const checkbox = document.getElementById("checkbox")
const divDoctor = document.getElementById("div-doctor")
const registerBox = document.getElementById("register-box")

function mostrarContenido(){
    if(checkbox.checked){
        divDoctor.style.display = "block"
        registerBox.style.height = "800px";
    }
    else{
        divDoctor.style.display = "none"
        registerBox.style.height = "560px";
    }
}