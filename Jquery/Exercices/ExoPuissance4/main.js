let div = $('div');
console.log(div);

div.click(function (){

    
    let token = $('<div>');
    token.css({ 'height' : '30px',
                'width' : '30px',                              
                'border-radius': "50%",
                "position" : "absolute"
             }).addClass('bleu');

    if (token.hasClass('bleu')){
        token.removeClass('bleu');
        token.addClass('rouge');
        console.log("2");
    }
    else if (token.hasClass('rouge')){
        token.removeClass('rouge');
        token.addClass('bleu');
        console.log("3");
    }
    else 
        {token.addClass('bleu');
        console.log("1");
    }
    $(this).append(token);


})