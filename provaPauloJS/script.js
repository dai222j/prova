function calcular() {


let deslocamento = parseFloat(document.getElementById("vd").value);
let intervalo = parseFloat(document.getElementById("it").value);
let vm = deslocamento/intervalo


if (vm >= 0) {
    alert("A velocidade média é de:" + vm + "km/h")
    
} else {
    alert("Há algo de errado, tente novamente.")
}

}

function limpar() {
    window.location.reload()
    
}