let $input = $('input#input');
let $btn = $('button');
let $ul = $('ul');
let $div = $('<div>').css('color', 'red');
let message = "Veuillez remplir le champ"

$btn.click(function (event) {

    $div.html(""); //refaire en supprimant l'élément plutôt qu'en le vidant !

    if($input.val().trim() != '')
    {
        $ul.append($('<li>'+$input.val().trim()+'</li>'));
    }

    else
    {
        $input.after($div.html(message));
    }

    $input.val('');
})



