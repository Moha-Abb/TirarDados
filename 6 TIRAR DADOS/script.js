const boton = document.getElementById('btn');
const dados = document.getElementById('dados');
const caras = document.getElementById('caras');
const resultado = document.getElementById('resultado');
const laSuma = document.getElementById('laSuma');

boton.addEventListener('click', tirar);


function tirar() {

    resultado.innerHTML = '';
    let max = caras.value;
    let min = 1;
    let suma = 0;


    for (i = 1; i <= dados.value; i++) {

        let k = Math.floor(Math.random() * (max - min + 1) + min);

        resultado.innerHTML += k + ',';
        suma = suma + k;
        laSuma.innerHTML = suma;
    }


}