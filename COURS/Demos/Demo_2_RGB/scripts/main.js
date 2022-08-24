const RANGE_MIN = 0;
const RANGE_MAX = 255;

let red_value = document.getElementById("redRange");
let green_value = document.getElementById("greenRange");
let blue_value = document.getElementById("blueRange");
let result = document.getElementById("resultColor");

if (!red_value) console.error(`Attention, nous ne retrouvons pas de redRange`);
else if (!green_value) console.error(`Attention, nous ne retrouvons pas de greenRange`);
else if (!blue_value) console.error(`Attention, nous ne retrouvons pas de blueRange`);

else {
    red_value.min = RANGE_MIN;
    red_value.max = RANGE_MAX;
    green_value.min = RANGE_MIN;
    green_value.max = RANGE_MAX;
    blue_value.min = RANGE_MIN;
    blue_value.max = RANGE_MAX;
}
function getHexaColor()
{
    
    let red_hex = convertHex(parseInt(red_value.value).toString(16));
    let green_hex =  convertHex(parseInt(green_value.value).toString(16));
    let blue_hex = convertHex(parseInt(blue_value.value).toString(16));
    
    console.log(`Rouge : ${red_hex} |Vert : ${green_hex} | Bleu : ${blue_hex}`)

    result.value = `#${red_hex}${green_hex}${blue_hex}`;
}

function convertHex (nb)
{
    if(nb <16) return `0${nb.toString(16)}`;
    return nb.toString(16);
}