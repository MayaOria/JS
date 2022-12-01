let rdv = document.getElementById('rdv');
console.log(rdv);

const today = Date.now();
today.toLocalString();
rdv.setAttribute('min', `${today}`);
