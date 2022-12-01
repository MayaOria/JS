const html_tbodys = document.querySelectorAll('tbody');
const tbody_descriptif = html_tbodys[0];
const tbody_panier = html_tbodys[1];
const total = document.getElementById('total');

let produits = [{'nom' : 'chaise', 'prix' : 50},
                {'nom' : 'table', 'prix' : 150},
                {'nom' : 'meuble TV', 'prix' : 250}]

let isInList = false;
let index = "";

total.value = 0;


produits.forEach((produit)=>{

    let tr = document.createElement('tr');
    let nom = document.createElement('td');
    nom.innerHTML = produit.nom;
    tr.appendChild(nom);
    let prix = document.createElement('td');
    prix.innerHTML = produit.prix;
    tr.appendChild(prix);
    let btnAjouter = document.createElement('button');
    btnAjouter.innerText = "Ajouter";

    btnAjouter.addEventListener('click', (e)=>{

        addToCart(produit);
        let retirer = e.target.nextElementSibling;
        retirer.removeAttribute('disabled');

    })
    tr.appendChild(btnAjouter);


    let btnRetirer = document.createElement('button');
    btnRetirer.innerText = "Retirer";
    btnRetirer.setAttribute('disabled', '');
    btnRetirer.addEventListener('click', ()=>{
        removeFromCart(produit);
    } )
    tr.appendChild(btnRetirer);

    tbody_descriptif.appendChild(tr);

})

const addToCart = (produit)=>{

    if((tbody_panier.childNodes.length)> 0)
    {  
        for(let i = 0; i < tbody_panier.childNodes.length; i++)
        {      
            console.log(`dans le panier, à l'index ${i}, se trouve le produit ${tbody_panier.childNodes[i].firstChild.innerText}`);
            console.log(`le produit que je veux ajouter est : ${produit.nom}`);                    
            if(tbody_panier.childNodes[i].firstChild.innerText == produit.nom)
            {
                isInList = true;
                index = i;                                         
            }                         
        }
        
        console.log(isInList);
        if(isInList)
        {
            +tbody_panier.childNodes[index].lastChild.innerText ++;
            isInList = false;
        }
    
        else
        {
            insertProduit(produit);
        }

    }

    else {
        insertProduit(produit);
    }

    console.log(total.value);
    total.value = +total.value + produit.prix;
    
}

const insertProduit = (produit) =>{
    let tr = document.createElement('tr');
            let nom = document.createElement('td');
            nom.innerHTML = produit.nom;
            tr.appendChild(nom);
            let prix = document.createElement('td');
            prix.innerHTML = produit.prix;
            tr.appendChild(prix);
            let qte = document.createElement('td');
            qte.innerText = 1;
            tr.appendChild(qte);

            tbody_panier.appendChild(tr);
            
    
}

const removeFromCart = (produit)=>{
    for(let i = 0; i < tbody_panier.childNodes.length; i++)
        {      
            console.log(`dans le panier, à l'index ${i}, se trouve le produit ${tbody_panier.childNodes[i].firstChild.innerText}`);
            console.log(`le produit que je veux supprimer est : ${produit.nom}`);                    
            if(tbody_panier.childNodes[i].firstChild.innerText == produit.nom)
            {
                isInList = true;
                index = i;                                         
            }                         
        }
        
        console.log(isInList);
        if(isInList){

            if(+tbody_panier.childNodes[index].lastChild.innerText > 0)
            {
                +tbody_panier.childNodes[index].lastChild.innerText --;
                isInList = false;
            }

            if (+tbody_panier.childNodes[index].lastChild.innerText == 0){

                console.log(index);
                console.log(tbody_panier.childNodes[index]);

                for(let i = 0; i < tbody_descriptif.childNodes.length; i++)
                {
                    if (tbody_panier.childNodes[index].firstChild.innerText == tbody_descriptif.childNodes[i].firstChild.innerText){
                        tbody_descriptif.childNodes[i].lastChild.setAttribute('disabled', '');
                    }
                }

                tbody_panier.removeChild(tbody_panier.childNodes[index]);
            }

            total.value = +total.value - produit.prix;
            
    
       
    }
}
    
    



