
let firstname = prompt(`Bonjour ! Quel est ton prénom?`);
let lastname = prompt(`Quel est ton nom?`);

let first_nb = prompt(`Encode le premier nombre`);

let second_nb = prompt(`Encode le second nombre`); 

// alert(`Le résultat de l'addition des deux nombres que tu as encodés est : ${parseInt(first_nb) + parseInt(second_nb)}`);
// alert(`Le résultat de l'addition des deux nombres que tu as encodés est : ${+first_nb + +second_nb}`);

let result = Number (first_nb) + Number (second_nb);
result = +first_nb + +second_nb;
result = parseInt(first_nb) + parseInt(second_nb);

alert(`Le résultat de l'addition des deux nombres que tu as encodés est : ${result}`);




