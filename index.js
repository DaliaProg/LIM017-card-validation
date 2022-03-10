import validator from './validator.js'; 

let formulario= document.getElementById("formulario-tarjeta").value;

for(let i=1; i <=12; i++) {
    let opcion = document.createElement('option');
    opcion.value =  i;
    opcion.innerText = i;
    //formulario.selectMes.appendChild(opcion);
}

const yearActual = new Date().getFullYear ();
for(let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value =  i;
    opcion.innerText = i;
    //formulario.selectYear.appendChild(opcion);
}

let answer= document.getElementById("answer");
answer.addEventListener("click", function () {
    let number = document.getElementById('inputNumero').value
    console.log(number)
    let isValid = validator.isValid(number)
    let maskify = validator.maskify(number)
    if (isValid) {
        document.getElementById('Formulario').style.display = 'none';
        document.getElementById('Correcto').style.display = 'block';
        document.getElementById('card').innerHTML = `¡Tu tarjeta ${maskify} fue validada con éxito!`
        document.getElementById('Incorrecto').style.display = 'none';
    }
    else {
        document.getElementById('Formulario').style.display = 'none';
        document.getElementById('Correcto').style.display = 'none';
        document.getElementById('Incorrecto').style.display = 'block';
    }
})

let principal = document.getElementById("principal");
principal.addEventListener("click", function () {
    location.reload();
})

let reload = document.getElementById("reload");
reload.addEventListener("click", function () {
    location.reload();
})