let $input = $('input#input');
let $btn = $('button');
let $ul = $('ul');
let $div = $('<div><div>').css('color', 'red');
let message = "Veuillez remplir le champ"

$btn.click(function (event) {

    $div.html("");

    if($input.val().trim() != '')
    {
        $ul.append($('<li>'+$input.val()+'</li>'));
    }

    else
    {
        $input.after($div.html(message));
    }

    $input.val('');
})



