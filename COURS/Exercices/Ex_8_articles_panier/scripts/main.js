const html_productList = document.querySelector("#productList>tbody");
const html_cart = document.querySelector("#cart>tbody");
const html_total = document.querySelector("#total");
html_total.value = 0;

class Article{
    
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
}

let article1 = new Article("Chaise", 25);
let article2 = new Article("Table", 150);
let article3 = new Article("Meuble TV", 250);
let article4 =  new Article("Cage à hamster", 350);

let articles = [article1, article2, article3, article4];

const addProductInList = function(article){

let tr = CreateTR(article);
let td_btn = document.createElement('td');
let btn = document.createElement('input');
btn.type = "button";
btn.value = "Ajouter au panier";
btn.onclick = function(){ajouterAuPanier(article)};

td_btn.append(btn);
tr.append(td_btn);

html_productList.append(tr);

}

const addProductInCart = function(article){
    let tr = CreateTR(article);
    html_cart.append(tr);
}


const CreateTR = function(obj)
{
    let tr = document.createElement('tr')
    for (let key in obj)
    {
        let td = document.createElement('td');
        td.innerText = obj[key];
        tr.append(td);
    }
    return tr;
}

const ajouterAuPanier = function(article){
    addProductInCart(article);
    html_total.value = parseFloat(html_total.value) + article.price;
}
const initProductList = function (articles) {
   for (const article of articles)
   {
    addProductInList(article);
   }
}

initProductList(articles);

