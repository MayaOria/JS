
let calcul = "";

const affichage = function (chiffre){
        
        let ecran = document.getElementById("show");
        ecran.value += chiffre;
        calcul += chiffre;
        console.log(calcul);

        calculer(calcul);
       
    }

const calculer = function(calcul){

let startIndex = 0;
let endIndex = (calcul.length)-1;

chercheOperateur(startIndex, endIndex);

}

const chercheOperateur = function(startIndex, endIndex){
    let operateurs = [];
    for (let i = startIndex; i < endIndex; i++){
        if (calcul[i] == '+' || calcul[i] == '-' || calcul[i] == '*' || calcul[i] == '/'){
            operateurs.push(i);
        }
    }
}

const resultat= function(calcul, operateurs){
    let numbers = [];
    let start_index = 0;
    
    for(i = 0; i< operateurs.length; i++){
        numbers.push(parseFloat(substring(start_index, operateurs[i])))
        start_index = operateurs[i]+1
    }

    for(let number in numbers){
        console.log(number);
    }

}



