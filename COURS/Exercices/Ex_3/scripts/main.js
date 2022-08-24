
const SEUIL_SALAIRE = 1400;
const CHOMAGE_BASE = 500;
const CHOMAGE_BONUS = 200;
const PRIME_INTERIM_MIN = 200;
const PRIME_INTERIM_MAX = 400;

let contrat = prompt(`Quel est votre type de contrat ? \nmi-temps (MT)?\n tempsplein (TP)?\n Interim (I)?`);
if(contrat) contrat = contrat.toUpperCase();
if (contrat != "MT" && contrat != "TP" && contrat != "I") alert(`Vous n'avez pas entré un type de contrat valide`);

else {
    let salaire = parseFloat(prompt(`Veuillez indiquer le montant de votre salaire mensuel :`));

    if (isNaN(salaire) || salaire < 0) alert(`Vous n'avez pas entré un montant valide`);
    else {
        let total = salaire;
        switch (contrat) {
            case "MT":
                total += CHOMAGE_BASE;
                if (salaire < SEUIL_SALAIRE) total += (CHOMAGE_BONUS);
                break;

            case "TP":
                break;

            case "I":
                if (salaire < SEUIL_SALAIRE) total += PRIME_INTERIM_MAX;
                else total += PRIME_INTERIM_MIN;
                break;

        }
        let cotisation;
        if (total < 800) cotisation = total * 0.15;
        else if (total < 1200) cotisation = total * 0.25;
        else if (total < 1500) cotisation = total * 0.30;
        else cotisation = total * 0.32;

        let contrat_name = "Temps plein";
        let bonus_message = "";

        switch (contrat) {
            case ("MT"):
                contrat_name = "mi-temps";
                bonus_message = (salaire + CHOMAGE_BASE < total)?", avec bonus ":", sans bonus ";
                break;
            case ("I"):
                contrat_name = "interim"; 
                bonus_message = "avec prime"
        }

        alert(`Pour un contrat ${contrat_name} de ${salaire} ${bonus_message} : total de ${total}€ | Cotisations de pension : ${cotisation}€`);

    }
}




