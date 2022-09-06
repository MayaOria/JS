let nom = prompt(`Quel est votre nom?`);
let prenom = prompt(`Quel est votre prénom?`);
let nb1 = prompt(`Veuillez entrer un premier nombre`);
let nb2 = prompt(`Veuillez entrer un second nombre`);

alert(`Bonjour ${prenom} ${nom}, le résultat de l'addition de ${nb1} et ${nb2} est : ${+nb1 + +nb2}`);
alert(`Bonjour ${prenom} ${nom}, le résultat de l'addition de ${nb1} et ${nb2} est : ${parseInt(nb1) + parseInt(nb2)}`);

alert(`Le résultat de la division de ${nb1} et ${nb2} est : ${parseInt(nb1)/parseInt(nb2)}`);

confirm(`Êtes-vous d'accord avec ce résultat ?`);