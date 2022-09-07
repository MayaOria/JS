let currentColor;
const cells = document.querySelectorAll("td div"); //plus malin de ne sélectionner que les .picker (mettre une class .picker dans les div)


for (let i = 0; i<5; i++){
    cells[i].classList.add(`color${i}`); //ici : on peut manipuler directement le style : cells[i].style.backgroundColor= "#FFFFF"
    cells[i].classList.add(`picker`);    
}

for(let j = 6; j<= 10; j++){
    cells[j].classList.add(`color${j}`);
    cells[j].classList.add(`picker`);
}


const resetColor = function(cellNumber){
        cells[5].classList = "";
}

const pressColor = function(cellNumber){
    
    resetColor(cellNumber)
    cells[5].classList.add(`color${cellNumber}`);
    currentColor = `color${cellNumber}`;
    
    
}


const emptyCells = document.querySelectorAll("table.play div")
console.log(emptyCells);


const playWithColor = function(elem)

{
    elem.classList = "";
    elem.classList.add(currentColor);
    // elem.style.backgroundColor = cells[5].style.backgroundColor;
}
