var log = console.log;

// Index.html

function cambiarModo() {
    const body = document.getElementById("body")
    const navbar = document.getElementById("navbar")
    const asideLeft = document.getElementById("aside-left")
    const section = document.getElementById("section")
    const asideLeftA = document.getElementById("dark-a-section")
    const footer = document.getElementById("footer")
    const footerA = document.getElementById("dark-a-footer")
    const button = document.getElementById("button")

    body.classList.toggle("body-dark")
    navbar.classList.toggle("navbar-dark")
    asideLeft.classList.toggle("aside-dark")
    section.classList.toggle("section-dark")
    asideLeftA.classList.toggle("aside-a-dark")
    footer.classList.toggle("footer-dark")
    footerA.classList.toggle("footer-a-dark")

    if(button.classList.contains("activo")){
        button.style.color = "#fff"
        button.style.borderColor = "#fff"
        button.classList.replace("activo", "noActivo")
    }
    else{
        button.style.color = "#000"
        button.style.borderColor = "#000"
        button.classList.replace("noActivo", "activo")
    }

    container.classList.toggle("container-dark")
}

function cambiarImagen() {
    const lightMode = document.querySelector("#light-mode");
    const darkMode = document.querySelector("#dark-mode");

    if (lightMode.classList.contains("visible")) {
        lightMode.classList.replace("visible", "invisible");
        darkMode.classList.replace("invisible", "visible");
    } else {
        lightMode.classList.replace("invisible", "visible");
        darkMode.classList.replace("visible", "invisible");
    }
}

// Index.html

// Registro.html

function mostrarContenido(){

    const checkbox = document.getElementById("checkbox")
    const divDoctor = document.getElementById("div-doctor")
    const divImg = document.getElementById("div-img")
    const divLeft = document.getElementById("div-left")
    const divRight = document.getElementById("div-right")
    const labelDoctor = document.getElementById("label-doctor")
    const buttonModificar = document.getElementById("button-modificar")

    if(checkbox.checked){
        divDoctor.style.display = "inline-block"
        divImg.style.width = "25%"
        divLeft.style.width = "25%"
        divLeft.style.padding = 0
        divRight.style.width = "25%"
        labelDoctor.style.width = "72%"
        buttonModificar.classList.replace("visible", "invisible")
    }
    else{
        divDoctor.style.display = "none"
        divImg.style.width = "40%"
        divLeft.style.width = "40%"
        divRight.style.width = "40%"
        labelDoctor.style.width = "55%"
        buttonModificar.classList.replace("invisible", "visible")
    }
}

// Registro.html