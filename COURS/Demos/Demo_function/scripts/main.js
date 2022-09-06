
    
    // let prenom = prompt(`Quel est votre prénom`);
    // let genre= confirm(`Êtes-vous une femme ?`);
    
    // if (genre) alert(`Bonjour Madame ${prenom}`);
    // else alert (`Bonjour Monsieur ${prenom}`);

const html_prenom = document.getElementById("prenom");
const html_genre_f = document.getElementById("genre_f");
const html_genre_m = document.getElementById("genre_m");
const html_genre_o = document.getElementById("genre_o");

const saveInfo = function(){

    if(!html_prenom.value) throw new Error(`Manque le prenom`);
    if(!html_genre_f.checked && !html_genre_m.checked && !html_genre_o.checked) throw new Error(`Manque le genre`);

    let prenom = html_prenom.value;
    let genre;
    if (html_genre_f.checked) genre = html_genre_f.value;
    else if (html_genre_m.checked) genre = html_genre_m.value;
    else genre = html_genre_o;
    alert(getInfo(prenom, genre));

}

/** 
* Fonction retournant une salutation sous forme de string
* @param {string} prenom Prénom du user
* @param {string} genre Genre du user
* @returns Bonjour "Madame" ou "Monsieur"
*/
const getInfo = function(prenom, genre){
    if(typeof(prenom) != "string") throw new TypeError('Prenom is not a string');
    if(typeof(genre) != "string") throw new TypeError('Genre is not a string');
    let message = "Bonjour ";
    switch (genre) {
        case "F":
            message += "Madame ";
            break;
        case "M":
            message += "Monsieur ";
            break;
    }

    return message + prenom;
}

