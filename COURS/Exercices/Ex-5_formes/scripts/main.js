

const pressCalcul = function(){
    
    
    alert(`Le perimètre de la forme ${getForme()} est : ${calculPerimetre(getForme())}`);
    alert(`L'aire de la forme ${getForme()} est : ${calculAire(getForme())}`);
    
}



const getForme = function(){
let formes = document.getElementById("formes");
forme = formes.value;
console.log(forme);
return forme;
}
 
const calculPerimetre = function(forme){
let perimetre;
    switch (forme){
        
        case "carre":
            let cote = document.getElementById("cote");
            console.log(cote);
            perimetre = parseFloat(cote.value)*4;
            break;
    
        case "rectangle":
            let hauteurRectangle = document.getElementById("hauteurRectangle");
            let largeur = document.getElementById("largeur");
            perimetre = (parseFloat(hauteurRectangle.value)*2) + (parseFloat(largeur.value)*2);
            break;
        
        case "triangle":
            let hauteurTriangle = document.getElementById("hauteurTriangle");
            let base = document.getElementById("base");
            perimetre = Math.sqrt((parseFloat(base.value**2)) + (parseFloat(hauteurTriangle.value**2)))+parseFloat(base.value) + parseFloat(hauteurTriangle.value);
            break;

        case "cercle":
            let rayon = document.getElementById("rayon");
            perimetre = 2*Math.PI*(parseFloat(rayon.value));
            break;
    }

    console.log(perimetre);
    return perimetre;
     
}

const calculAire = function(forme){
    let aire;
        switch (forme){
            
            case "carre":
                let cote = document.getElementById("cote");
                console.log(cote);
                aire = parseFloat(cote.value)*parseFloat(cote.value);
                break;
        
            case "rectangle":
                let hauteurRectangle = document.getElementById("hauteurRectangle");
                let largeur = document.getElementById("largeur");
                aire = parseFloat(hauteurRectangle.value)*parseFloat(largeur.value);
                break;
            
            case "triangle":
                let hauteurTriangle = document.getElementById("hauteurTriangle");
                let base = document.getElementById("base");
                aire = ((parseFloat(base.value)) * (parseFloat(hauteurTriangle.value)))/2;
                break;
    
            case "cercle":
                let rayon = document.getElementById("rayon");
                aire = Math.PI*(parseFloat(rayon.value)**2);
                break;
        }
    
        console.log(aire);
        return aire;
         
    }
    
