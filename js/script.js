//Variables
let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container");
let aviso = document.querySelector(".aviso");

//Event listener para enter y click
botonAgregar.addEventListener("click", () => {
    chequearInput();
})

inputPrincipal.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        chequearInput();
    }
})

const chequearInput = () => {
    if (inputPrincipal.value) {
        let objItem = new Item(inputPrincipal.value);
        objItem.crearDiv(inputPrincipal.value);
        aviso.textContent = ""
        limpiarInput();
    } else {
        aviso.textContent = "Aún no has ingresado una nueva tarea"
    }
}

const limpiarInput = () => {
    inputPrincipal.value = "";
}

class Item {
    constructor(inputPrincipal) {
        this.inputPrincipal = inputPrincipal;
    };
    crearDiv(tarea) {
        //Crear elemento input
        let inputItem = document.createElement("input");
        inputItem.setAttribute("type", "text");
        inputItem.setAttribute("disabled", true);
        inputItem.classList.add("item-input");
        inputItem.value = tarea;

        //Crear DIV
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");

        //Crear boton editar
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        //Crear boton eliminar
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        //Agregar elementos al DIV
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);

        //Agregar DIV al container
        contenedor.appendChild(nuevoDiv);

        botonEditar.addEventListener("click", () => {
            if (inputItem.disabled == false) {
                inputItem.setAttribute("disabled", true);
                botonEditar.style.color = "#62d0ff";
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            } else {
                inputItem.removeAttribute("disabled");
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
                botonEditar.style.color = "rgb(255, 6, 46)";
            }
        })

        botonRemover.addEventListener("click", () => {
            nuevoDiv.removeChild(inputItem);
            nuevoDiv.removeChild(botonEditar);
            nuevoDiv.removeChild(botonRemover);
        })
    }
}
