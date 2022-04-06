// 1 Generar número aleatorio entre 10 y 5.
let numRandom1 = Math.floor (Math.random() * (10 - 5 + 1)) + 5;
console.log(numRandom1);

// 2.1 Generar número aleatorio entre 7 y 5.
let numRandom2 = Math.floor (Math.random() * (7 - 5 + 1)) + 5;
console.log(numRandom2);

// Obtener número aleatorio dentro de un rango dado

function randomNumber() {
    let min = document.getElementById("getMin").value;
    let max = document.getElementById("getMax").value;
    let randomNumber = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    
    return document.getElementById("randomNumber").innerHTML = randomNumber;
}

// 2.2/3 Obtener una letra aleatoria de tu nombre.

function randomNameLetter() {
    let name = document.getElementById("getName").value;
    let nameLength = name.length - 1;
    let randomNameLetter = name.charAt(Math.floor (Math.random() * (nameLength - 0 + 1)) + 0);

    return document.getElementById("randomLetter").innerHTML = randomNameLetter;
}


