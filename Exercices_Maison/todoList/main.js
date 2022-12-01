const itemInput = document.getElementById('item');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const btnAdd = document.getElementById('add');
const ulList = document.getElementById('list');
const totalPrice = document.getElementById('totalPrice');
const liToHide = document.getElementById('toHide');


let item;
let price;
let qty;
let total = 0
let amount;



btnAdd.addEventListener('click', (e)=>{

   getInputValues();
   addToList();
   calcTotal(true);
   clearInput();
})


const getInputValues = ()=>{
    item = itemInput.value;
    console.log(item);
    price = priceInput.value;
    console.log(price);
    qty = quantityInput.value;
    console.log(qty);
}

const addToList = () =>{

    if(item.trim() != "" && qty > 1 && price > 0)
    
    {
    
    liToHide.style.display = 'none';
    itemInput.style.borderColor = 'black';
    quantityInput.style.borderColor = 'black';
    priceInput.style.borderColor = 'black';

    let li = document.createElement('li');
    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = "SUPPRIMER";
    btnDelete.addEventListener('click', ()=>{
        deleteLi(li);
        calcTotal(false, amount);
    })

    let btnUpdate = document.createElement('button');
    btnUpdate.innerHTML = "MODIFIER";


    li.innerHTML = `${qty} x ${item} (${+qty * +price}€)`;
    li.appendChild(btnDelete);
    li.appendChild(btnUpdate);
    ulList.appendChild(li);
    }

    else {
        if(item.trim() == ""){
            itemInput.style.borderColor = 'red';
        }
        else itemInput.style.borderColor = 'black';
        if(qty < 1 ){
            quantityInput.style.borderColor = 'red';
        }
        else quantityInput.style.borderColor = 'black';
        if(price <= 0){
            priceInput.style.borderColor = 'red';
        }
        else priceInput.style.borderColor = 'black';
    }
}

const clearInput = ()=>{
    itemInput.value = "";
    quantityInput.value = "";
    priceInput.value = "";
}

const deleteLi = (li)=>{
    ulList.removeChild(li);
}


const calcTotal = (boolCalc, amount)=> {

    if (boolCalc){
        total += (amount);
        totalPrice.innerHTML = `Total : ${total}`;
    }

    else {
        total -= (amount);
        totalPrice.innerHTML = `Total : ${total}`;
    }
  
}