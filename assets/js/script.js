let ele = document.getElementById("ele1")
let pintar = function(arg) {
    ele.style.backgroundColor = arg
}

ele.addEventListener("click", function () {
    ele.style.backgroundColor = 'yellow'
});
pintar('green')
