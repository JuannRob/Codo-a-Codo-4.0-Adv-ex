// Ejercicio 1

function getMonth() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let monthInput = document.getElementById("getMonth").value - 1;
    if (monthInput >= 0  && monthInput <= 11) {
        return document.getElementById("printMonth").innerHTML = `Mes: <b>${months[monthInput]}</b>`;
    } else {
        return document.getElementById("printMonth").innerHTML = "<p style='color: red;'>Ingrese un número del 1 al 12</p>";
    }
    
}

// Ejercicio 2

function isVowel() {
    const vowels = ["a", "e", "i", "o", "u"];
    let letterInput = document.getElementById("getLetter").value;
    for (let v of vowels) {
        if (vowels.includes(letterInput)) {
            return document.getElementById("printRes").innerHTML = `La letra <b>${letterInput}</b> es una vocal.`;
        } else {
            return document.getElementById("printRes").innerHTML = `La letra <b>${letterInput}</b> no es una vocal.`;
        }
    }
    
}

// Ejercicio 4 y 5

function createNumbersArray() {
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    let numbers = [num1, num2, num3];
    if (numbers.includes('')){
        return document.getElementById("orderedArray").innerHTML = "<p style='color: red;'>Debes ingresar 3 números</p>";
    } else {
        orderArray(numbers);
    }
}

function orderArray(arr){
    if (document.getElementById("slider").checked) {
        return document.getElementById("orderedArray").innerHTML = arr.sort((a, b) => a - b);
    } else {
        return document.getElementById("orderedArray").innerHTML = arr.sort((a, b) => b - a);
    }
}
