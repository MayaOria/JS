const html_ul = document.querySelector('ul');
const html_button = document.querySelector('button');


html_button.addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.innerText = "item";
    html_ul.appendChild(li);
})