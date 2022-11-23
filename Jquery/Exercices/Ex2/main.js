window.onload = function () {

$('button').click(function(){


    let $valInput = $('input').val();
    let $messageErreur = $('<div>Veuillez remplir le champ</div>');

    console.log($valInput);
    console.log($messageErreur);

    if ($valInput.trim() == ''){
        $messageErreur.insertAfter($('input'));
    }

    else{
        let $li = $('<li>' + $valInput + '</li>');
        $('ul').append($li);
    }
        
    
    
})

}

// window.onload = function () {

//     let $div = $('<div>');
//     let $valInput = $('input').val();
    
//     $('button').click(function(){
    
         
//         if ($valInput.trim() == '')
        
//         {
            
//             $div    
//                 .css('color', 'red')
//                 .text('Veuillez remplir le champ')
//                 .insertAfter($('input'));
//         }
    
//         else
        
//         {
//             let $li = $('<li>' + $valInput + '</li>');
//             $('ul').append($li);
//         }
     
    
        
        
//     })
    
//     }