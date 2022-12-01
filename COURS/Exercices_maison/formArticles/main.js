const container = document.querySelector('.container');
const ul = document.querySelector('ul');
const input_nbItems = document.getElementById('nbItems');
const btnCommande = document.getElementById('commander');

input_nbItems.value = 0;

let produits = [{'nom' : 'chaise', 'prix' : 50},
                {'nom' : 'table', 'prix' : 150},
                {'nom' : 'meuble TV', 'prix' : 250}]

let itemsInCard = [{'nom' : 'chaise', 'prix' : 50, 'qte' : 0},
{'nom' : 'table', 'prix' : 150, 'qte' : 0},
{'nom' : 'meuble TV', 'prix' : 250, 'qte' : 0}];

let prixTotal = 0;





produits.forEach((produit)=>{
    let li = document.createElement('li');
    let nom = document.createElement('input');
    nom.setAttribute('type', 'text');
    nom.setAttribute('readonly', '');
    nom.value = produit.nom;
    li.appendChild(nom);
    let prix = document.createElement('input');
    prix.setAttribute('type', 'text');
    prix.setAttribute('readonly', '');
    prix.value = produit.prix;
    li.appendChild(prix);

    let btnAddCart = document.createElement('button');
    btnAddCart.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';

    btnAddCart.addEventListener('click', (e)=>{
        addToCart(produit);
    })

    li.appendChild(btnAddCart);

    ul.appendChild(li);
})


const addToCart = (produit)=>{
    itemsInCard.forEach((item)=>{
        if(produit.nom == item.nom){
            +item.qte++;
        }
    })
    console.log(itemsInCard);
    +input_nbItems.value++ 
}

btnCommande.addEventListener('click', ()=>{
    container.innerHTML = '';
    let h2 = document.createElement('h2');
    h2.innerHTML = "Résumé de votre commande"
    container.appendChild(h2);
    let ul = document.createElement('ul');

    itemsInCard.forEach((item)=>{
        let li = document.createElement('li');
        let nom = document.createElement('input');
        nom.setAttribute('type', 'text');
        nom.setAttribute('readonly', '');
        nom.value = item.nom;
        li.appendChild(nom);

        let prix = document.createElement('input');
        prix.setAttribute('type', 'text');
        prix.setAttribute('readonly', '');
        prix.value = item.prix;
        li.appendChild(prix);

        let qte = document.createElement('input');
        qte.setAttribute('type', 'number');
        qte.setAttribute('min', '0');
        qte.value = item.qte;

        qte.addEventListener('click', (e)=>{
            item.qte = qte.value;
            console.log(itemsInCard);
            prixTotal = 0;

            itemsInCard.forEach((item)=>{
                prixTotal += +item.qte * +item.prix;
              
            })
            inputPrix.value = prixTotal;
            listeLi.forEach((li)=>{
                if(li.lastChild.value == 0){
                    ul.removeChild(li);
                }
            })
        })
        li.appendChild(qte);

        ul.appendChild(li);

        let listeLi = ul.childNodes;
        
        

        prixTotal += (+item.prix * +item.qte);
    })

    container.appendChild(ul);

    let inputPrix = document.createElement('input');
    inputPrix.setAttribute('readonly', '');
    inputPrix.value = prixTotal;

    container.appendChild(inputPrix);

})


