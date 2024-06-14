const elemento = document.querySelector('#key')
const body = document.querySelector('body')

document.addEventListener("keydown", function (event) {
if (event.key === "a" || event.key === "A") {
elemento.style.backgroundColor = 'pink'
agregarElemento();
} else if (event.key === "s" || event.key === "S") {
elemento.style.backgroundColor = 'orange'
    }else if (event.key === "d" || event.key === "D") {
elemento.style.backgroundColor = 'skyblue'
}
else if (event.key === "q" || event.key === "Q") {
    let nuevoElemento1 = document.createElement("div");
    nuevoElemento1.style.height = '200px'
    nuevoElemento1.style.width = '200px'
    nuevoElemento1.style.border = '200px'
    nuevoElemento1.style.backgroundColor = 'purple'
    body.appendChild(nuevoElemento1);
}
else if (event.key === "w" || event.key === "W") {
    let nuevoElemento2 = document.createElement("div");
    nuevoElemento2.style.height = '200px'
    nuevoElemento2.style.width = '200px'
    nuevoElemento2.style.border = '200px'
    elemento.style.backgroundColor = 'grey'
     body.appendChild(nuevoElemento2);
} else if (event.key === "e" || event.key === "E") {
    let nuevoElemento3 = document.createElement("div");
    nuevoElemento3.style.height = '200px'
    nuevoElemento3.style.width = '200px'
    nuevoElemento3.style.border = '200px'
    elemento.style.backgroundColor = 'brown'
     body.appendChild(nuevoElemento3);
}
});