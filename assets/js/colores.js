
function pintar(event) {
    let elemento = event.target;
    elemento.style.background = 'black';
}
document.getElementById('div1').addEventListener('click', pintar);
document.getElementById('div2').addEventListener('click', pintar);
document.getElementById('div3').addEventListener('click', pintar);
document.getElementById('div4').addEventListener('click', pintar);
