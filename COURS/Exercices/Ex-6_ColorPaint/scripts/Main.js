let currentColor;
const cells = document.querySelectorAll("td div");


for (let i = 0; i<5; i++){
    cells[i].classList.add(`color${i}`);    
}

for(let j = 6; j<= 10; j++){
    cells[j].classList.add(`color${j}`);
}


const resetColor = function(cellNumber){
    if(cells[5].classList.contains(`color${cellNumber}`)){
        console.log(`la classe color${cellNumber} est déjà présente`);
        cells[5].classList.remove(`color${cellNumber}`)
    }
}
const pressColor = function(cellNumber){

    resetColor(cellNumber);
    cells[5].classList.add(`color${cellNumber}`);
    
}
