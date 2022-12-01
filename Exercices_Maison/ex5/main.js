const select = document.getElementById('forme');
const btnSelect = document.getElementById('selection');
const champs = document.getElementById('champs');
const resultat = document.getElementById('resultat');

btnSelect.addEventListener('click', ()=>{

    let forme = select[select.selectedIndex].value;
    
    switch (forme){

        case "rectangle":
            afficheRectangle();
            break;
        case "triangle":
            afficheTriangle();
            break;
        case "carre":
            afficheCarre();
            break;
        case "cercle":
            afficheCercle();
            break;

    }

})

const afficheRectangle = ()=>{
    clearContent();
    let forme = "rectangle"
    let labelLongueur = document.createElement('label');
    labelLongueur.innerText = "Longueur ?"
    let inputLongueur = document.createElement('input');
    let labelLargeur = document.createElement('label');
    labelLargeur.innerText = "Largeur ?"
    let inputLargeur = document.createElement('input');
    let btn = document.createElement('button');
    btn.innerText = "CALCUL DE L'AIRE"
    btn.addEventListener('click', (e)=>{
        calculAire(forme);
        console.log(forme);
    })
    champs.appendChild(labelLongueur);
    champs.appendChild(inputLongueur);
    champs.appendChild(labelLargeur);
    champs.appendChild(inputLargeur);
    champs.appendChild(btn);
}

const afficheTriangle = ()=>{
    clearContent();
    let forme = "triangle";
    let labelBase = document.createElement('label');
    labelBase.innerText = "Base ?";
    let inputBase = document.createElement('input');
    let labelHauteur = document.createElement('label');
    labelHauteur.innerText = "Largeur ?"
    let inputHauteur = document.createElement('input');
    let btn = document.createElement('button');
    btn.innerText = "CALCUL DE L'AIRE";
    btn.addEventListener('click', (e)=>{
        calculAire(forme);
        console.log(forme);
    })
    champs.appendChild(labelBase);
    champs.appendChild(inputBase);
    champs.appendChild(labelHauteur);
    champs.appendChild(inputHauteur);
    champs.appendChild(btn);
}


const afficheCarre = ()=>{
    clearContent();
    let forme = "carre";
    let labelCote = document.createElement('label');
    labelCote.innerText = "Côté ?";
    let inputCote = document.createElement('input');
    
    let btn = document.createElement('button');
    btn.innerText = "CALCUL DE L'AIRE";
    btn.addEventListener('click', (e)=>{
        calculAire(forme);
        console.log(forme);
    })
    champs.appendChild(labelCote);
    champs.appendChild(inputCote);
    
    champs.appendChild(btn);
}

const afficheCercle = ()=>{
    clearContent();
    let forme = "cercle";
    let labelRayon = document.createElement('label');
    labelRayon.innerText = "Rayon ?";
    let inputRayon = document.createElement('input');
    
    let btn = document.createElement('button');
    btn.innerText = "CALCUL DE L'AIRE";
    btn.addEventListener('click', (e)=>{
        calculAire(forme);
        console.log(forme);
    })
    champs.appendChild(labelRayon);
    champs.appendChild(inputRayon);
    
    champs.appendChild(btn);
}





const clearContent = ()=>{
    champs.innerHTML = "";
    resultat.innerHTML = "";
}



calculAire = (forme) => {
let input = document.querySelectorAll('input');
let aire;
let message = `L'aire du ${forme} et de`


switch(forme){
    case "rectangle":
        aire = +(input[0].value) * +(input[1].value);
        console.log(aire);
        resultat.innerHTML = message += ` ${aire}`;
        break;

    case "triangle":
        aire = (+(input[0].value) * +(input[1].value))/2;
        resultat.innerHTML = message += ` ${aire}`;
        break;

    case "carre":
        aire = +(input[0].value) * +(input[0].value);
        resultat.innerHTML = message += ` ${aire}`;
        break;

    case "cercle":
        aire = Math.PI * +(input[0].value) * +(input[0].value);
        resultat.innerHTML = message += ` ${aire}`;
        break;

}



}