let html_tbodys = document.querySelectorAll('tbody');
const html_input = document.getElementById('total');
console.log(html_input);
console.log(html_tbodys);


const tbody_descriptif = html_tbodys[0];
console.log(tbody_descriptif);
const tbody_panier = html_tbodys[1];

let produits = [
                {'nom' : 'chaise', 'prix': 50},
                {'nom' : 'table', 'prix': 150},
                {'nom' : 'meuble TV', 'prix': 250},
                ]


produits.forEach((produit)=>{
    
    let tr = document.createElement('tr');
    let nom = document.createElement('td');      
    let prix = document.createElement('td');
    nom.innerHTML = produit.nom;
    prix.innerHTML = produit.prix;
    tr.appendChild(nom);
    tr.appendChild(prix);
    let btn = document.createElement('button');
    btn.innerText = "Ajouter";

    btn.addEventListener('click', ()=>{
        addToCart(produit);
        addToTotal(+produit.prix);
    })

    tr.appendChild(btn);
    tbody_descriptif.appendChild(tr);
})


const addToCart = (produit) =>{
    let tr = document.createElement('tr');
    let nom = document.createElement('td');      
    let prix = document.createElement('td');
    nom.innerHTML = produit.nom;
    prix.innerHTML = produit.prix;
    tr.appendChild(nom);
    tr.appendChild(prix);

    tbody_panier.appendChild(tr);
}

const addToTotal = (prix)=>{
    let total = +html_input.value;
    total += prix;
    html_input.value = total;
}
