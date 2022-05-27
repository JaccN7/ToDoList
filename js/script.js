//Variables
let inputPrincipal;
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container")

botonAgregar.addEventListener("click", function () {
    chequearInput();
})

function chequearInput() {
    inputPrincipal = document.querySelector(".input").value;
    console.log(inputPrincipal)
    if (inputPrincipal.length !== 0) {
        let objItem = new Item(inputPrincipal);
        console.log(objItem)
        objItem.crearDiv(inputPrincipal);
        inputPrincipal.innerHTML = "";
        limpiarInput();
    } else {
        console.log("No se ha ingresado una tarea")
    }
}

function limpiarInput(){
    inputPrincipal = document.querySelector(".input").value = "";
}

class Item {
    constructor(inputPrincipal) {
        this.inputPrincipal = inputPrincipal
        console.log(this.inputPrincipal)
    };
    crearDiv(tarea) {
        let inputItem = tarea;
        //Crear elemento input
        console.log(inputItem)
        inputItem = document.createElement("input");
        inputItem.setAttribute("type", "text");
        inputItem.setAttribute("disabled", true);
        inputItem.classList.add("item-input");
        console.log(inputItem)

        //Crear DIV
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");
        console.log(nuevoDiv)

        //Crear boton editar
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar");
        console.log(botonEditar);

        //Crear boton eliminar
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover");
        console.log(botonRemover);

        //Agregar elementos al DIV
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);

        //Agregar DIV al container
        contenedor.appendChild(nuevoDiv);
        
    }
}
