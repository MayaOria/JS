const btn = document.querySelector('button');
const salaireInput = document.getElementById('salaire');
const divResultat = document.getElementById('resultat');

const chomage = 500;
const primeChomage = 200;
const primeInterim1 = 200;
const primeInterim2 = 400;
const cotis1 = 15;
const cotis2 = 25;
const cotis3 = 30;
const cotis4 = 32;

let cotis;

btn.addEventListener('click', ()=> {

    let salaire = +salaireInput.value;
    
    let select = document.getElementById('contrat');
    let contrat = select[select.selectedIndex].value;
    
    switch (contrat) {

        case "Mi-temps":
            salaire = calcMiTps(salaire);
            break;
        case "Temps-plein":
            salaire = calcTpsPlein(salaire);
            break;
        case "Interim":
            salaire = calcInterim(salaire);
            break;
    }
    
    
    divResultat.innerHTML = `Le salaire pour un contrat ${contrat} est de ${+salaire} €. Les cotisations pour la pensions s'élèvent à ${calcCotis(salaire)}`

})

const calcMiTps = (salaire)=>{

    
    if(salaire < 1400){
        salaire += chomage;
        salaire += primeChomage;
        return salaire;
    }

    else {
        salaire += chomage;
        return salaire;
    }

}

const calcTpsPlein = (salaire) =>{

    return salaire;
}

const calcInterim = (salaire) =>{

    if (salaire < 1400){
        salaire += primeInterim2;
        return salaire;

    }

    else {
        salaire+= primeInterim1;
        return salaire;
    }
}

const calcCotis = (salaire) =>{
    
    if(salaire < 800)
    {
        cotis = salaire/100*coti1;
        return cotis;
    }

    else if(salaire <1200)
    {
        cotis = salaire/100*cotis2;
        return cotis;
    }

    else if(salaire <1500)
    {
        cotis = salaire/100*cotis3;
        return cotis;
    }

    else {
        cotis = salaire/100*cotis4;
        return cotis;
    }


}