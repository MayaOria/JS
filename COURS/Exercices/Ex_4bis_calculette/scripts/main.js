const html_show = document.getElementById("show");
const html_calcul = document.getElementById("calcul");
html_show.value = 0;
let decimalPressed = false;
let equalPressed = false;
let number1;
let operator;

const pressNumber = function (nb) {
    if (equalPressed) {
        html_show.value = 0;
        equalPressed = false;
    }
    if (nb == 0 && html_show.value === "0") nb = "";
    if (nb != 0 && nb != '.' && html_show.value === "0") html_show.value = "";
    html_show.value += nb;
    html_calcul.value += nb
}

const pressDecimal = function () {
    if (!decimalPressed) {
        pressNumber(".");
        
        html_calcul.value += ".";
        decimalPressed = true;
    }
    else console.warn(`Decimal was already pressed...`)
}

const pressOperator = function (ope) {
    if (number1 || number1 == 0) pressEqual();
    if(!number1 && number1 != 0){
    number1 = parseFloat(html_show.value);
    console.log(`number1 : ${number1}`);
    operator = ope;
    console.log(`operator : ${operator}`);
    decimalPressed = false;
    html_show.value = "0";
    html_calcul.value += operator;
    }
    else {
        let numberTemp = parseFloat(html_show.value);
        console.log(`numberTemp : ${numberTemp}`);
        operator = ope;
        console.log(`operator : ${operator}`);
        switch (operator) {
            case '+':
                number1 += numberTemp;
                break;
            case '-':
                number1 -= numberTemp;
                break;
            case '*':
                number1 *= numberTemp;
                break;
            case '/':
                number1 /= number2;
                break;
            } 
            html_calcul.value += operator;
            }
    decimalPressed = false;
    html_show.value = number1;
}

const pressEqual = function () {
    if (!number1 && number1 != 0) throw new Error("Pas encore de valeur...");
    if (!operator) throw new Error("Pas encore d'opérateur...");
    let number2 = parseFloat(html_show.value);
    console.log(`number2 : ${number2}`);
    html_calcul.value += " = ";
    switch (operator) {
        case '+':
            html_show.value = number1 + number2;
            
            break;
        case '-':
            html_show.value = number1 - number2;
            break;
        case '*':
            html_show.value = number1 * number2;
            break;
        case '/':
            html_show.value = number1 / number2;
            break;
    }
    equalPressed = true;
    decimalPressed = false;
    html_calcul.value += html_show.value;
}