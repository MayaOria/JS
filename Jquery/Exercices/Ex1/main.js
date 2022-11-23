window.onload = function () {


// En Jquery

    $('button').click(function(){

    $('ul').append($('<li>item</li>'));
    
})

}

// // Ou : 
// $('button').on(('click', function(event){

//     $('ul').append($('<li>item</li>'));
    
// })


// En JS : 

// let btn = document.querySelector('button');
// let ul = document.querySelector('ul');

// btn.addEventListener('click', function(e) {
//     let li = document.createElement('li');
//     li.innerText = "Item";
//     ul.appendChild(li);
// });