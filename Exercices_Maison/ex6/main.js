const choose = document.querySelectorAll('.choose');
const choosen = document.getElementById('choosen');

const pixels = document.querySelectorAll('.draw');


let rgb1 = 100;
let rgb2 = 0;
let rgb3 = 200;


for(let i = 0; i<choose.length; i++){
    
    choose[i].style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    rgb1 += 25;
    rgb2 += 20;
    rgb3 -= 20;

    choose[i].addEventListener('click', (e)=>{
        choosen.style.backgroundColor = `${e.target.style.backgroundColor}`;
    })
    
}

for(let i = 0; i<pixels.length; i++){

    pixels[i].addEventListener('click', (e)=>{
        e.target.style.backgroundColor = choosen.style.backgroundColor;
    })
}

