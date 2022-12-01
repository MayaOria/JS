const article = document.getElementById('article');
const quantite = document.getElementById('qte');
const prix = document.getElementById('prix');
const btn = document.getElementById('btn');
const resultat = document.getElementById('resultat');



btn.addEventListener('click', ()=>{
    let art = (+quantite.value > 1) ? `articles` : `article`;
    resultat.innerHTML = `Le prix TVAC pour ${+quantite.value} ${art} '${article.value}', est de ${+prix.value * 1.21 * quantite.value}€ (${prix.value * +quantite.value}€ HTVA)` 
})
