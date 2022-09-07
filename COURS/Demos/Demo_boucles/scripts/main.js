const result_for = document.querySelector(`p#result_for`);
const html_init = document.getElementById(`init`);
const html_limit = document.getElementById(`limit`);

const for_demo = function(){

    result_for.innerHTML="";
    let i;
    for (i = parseInt(html_init.value); i< parseInt(html_limit.value); i++){
        result_for.innerHTML += `${i}<br>`;
    }

    result_for.innerHTML += `et enfin ${i}...`;
}

const execute = function(){

    for_demo
}