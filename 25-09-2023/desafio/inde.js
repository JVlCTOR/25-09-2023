const mostrar = document.getElementById('resultado')
function valorDoInput(){
    let inputElement = document.getElementById('input1')
    let inputElement2 = document.getElementById('input2')
    let valordoInput = Number(inputElement.value * inputElement2.value);
    mostrar.innerHTML = valordoInput
}