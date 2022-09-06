const ecran = document.getElementById("show");
let number1;
let number2;
let ope;
let decimalChecked = false;
let equalChecked = false;
let result;


const pressNumber = function(number){
    if (ecran.value === 0 || equalChecked){
    ecran.value = number;
    equalChecked = false;
    }
    else ecran.value += number;
}

const pressDecimal = function(){
    number1 = parseFloat(ecran.value);
    if (number1 && number1 != 0 && !decimalChecked){
    ecran.value += ".";
    decimalChecked = true;
    }                                    
    else if (!number1){
        ecran.value = 0;
        ecran.value += ".";
        decimalChecked = true;
    }
}
                                            
const pressOperator = function(operator){
    ope = operator;
    number1 = parseFloat(ecran.value);
    console.log(`number1 : ${number1}`);
    ecran.value = 0;
    decimalChecked = false;
}

const pressEqual = function(){

    number2 = parseFloat(ecran.value)
    console.log(`number2 : ${number2}`)
    switch (ope) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    ecran.value = result;
    equalChecked = true;
    decimalChecked = false;

    
}
 