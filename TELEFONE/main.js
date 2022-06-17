const listaTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (indice = 0; indice < listaTeclas.length; indice++) {
    const tecla = listaTeclas[indice];
    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }
}