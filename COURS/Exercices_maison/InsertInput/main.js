const ul_html = document.querySelector('ul');
const input_html = document.getElementById('item');
const btn_html = document.querySelector('button');
const body = document.querySelector('body');

btn_html.addEventListener('click', ()=>{
    let value = (input_html.value).trim();

    //
    let p = document.querySelector('p');
    console.log(p);
    if(p){
        body.removeChild(p);
    }

    
    if(value != ''){

        let li = document.createElement('li');
        li.innerHTML = value;
        ul_html.appendChild(li);
        input_html.value = "";
    }

    else {
        let p = document.createElement('p')
        p.style.color = 'red';
        p.innerHTML = "Veuillez remplir le champ"
        body.appendChild(p);
    }

})
