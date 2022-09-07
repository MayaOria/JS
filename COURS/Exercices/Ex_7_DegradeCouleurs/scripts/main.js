const RANGE_MIN = 0;
const RANGE_MAX = 255;

const html_ligne = document.querySelector("#ligne");

const red = document.querySelector('#red_range');
const green = document.querySelector('#green_range');
const blue = document.querySelector('#blue_range');

red.min = RANGE_MIN;
red.max = RANGE_MAX;
green.min = RANGE_MIN;
green.max = RANGE_MAX;
blue.min = RANGE_MIN;
blue.max = RANGE_MAX;

let html_red = red.value;
let html_green = green.value;
let html_blue = blue.value;
 
let html_color = html_cell.style.backgroundColor

const PressButton = function(){

    html_ligne.innerHTML = ""; 
    
    for (let i = 0; i< 10; i++){
    
    html_ligne.innerHTML += `<td><div class = 'cell' id= '${i}';></div></td>`;
    
}


}