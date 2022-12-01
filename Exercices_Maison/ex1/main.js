let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let nb1Input = document.getElementById('nb1');
let nb2Input = document.getElementById('nb2');
const btn = document.querySelector('button');
const divResult = document.getElementById('resultat');



btn.addEventListener('click', ()=>{
    let nb1 = +nb1Input.value;
    let nb2 = +nb2Input.value;
    divResult.innerHTML = `Bonjour ${prenom.value}, ${nom.value} ! Le résultat de l'addition de ${nb1Input.value} + ${nb2Input.value} = ${nb1 + nb2}`;
})
