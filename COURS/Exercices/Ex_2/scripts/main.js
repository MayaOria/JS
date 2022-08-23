/* <p>Sur une page web, interrogez l'utilisateur sur un article auquel vous devez ajouter la TVA de 21%. <br> 
    Demandez le nom de l'article, le prix et la quantité. <br>
Exemple : <br>
"Pour 6 cartes sd, veuillez payer la somme de 108,90€ (90€ HTVA)" */

let article = prompt(`Quel est le nom de l'article ?`);
if (article == null || article == "") {
    alert(`Vous n'avez pas entré de nom`)
}
else {
    let prix_htva = parseFloat(prompt(`Quel est le prix de l'article HTVA?`));
    if (isNaN(prix_htva)) {
        alert("Vous n'avez pas entré de prix")
    }
    else {
        let quantite = parseInt(prompt(`Quelle quantité ?`));
        if (isNaN(quantite)) {
            alert("Vous n'avez pas entré de quantité!")
        }

        else { let total_htva = prix_htva * quantite; }

        alert(`Pour ${quantite} ${article}, veuillez payer la somme de ${(total_htva * 1.21).toFixed(2)} (montant HTVA : ${total_htva.toFixed(2)})`);
    }
}