
window.onload = function() {
    let i = 1;
    // let nbli = 0;

//ex1
    // $('li').each(function(){
    //     nbli++;
    // })

    let nbli = $('li').length;
    console.log('exercice 1 : il y a ' + nbli + ' li dans le document');


//ex2
let $span = $('span');
$span.each(function(){
let text = $(this).text();
$(this).html(`<strong>${text}</strong>`)
    
})


//ex3

let html_in_ol = $('ol').html();
$('ol'.html(`<ul>${html_in_ol}</ul>`))





//ex4
$('li').each(function(){
    let $text = $(this).text();
    $text = i + '.' + $text + " ";
    $(this).html($text);
    i++;
})


//ex5
let $lastli = $('li:last-child');
//li:last ou 
// $('li')
// .last()
// .text('Toto')

$lastli.html('Toto');
//ou .txt


//ex6
let $email = $('#email');
let $password = $('#password');

let temp = $email.val();
    
$email.val($password.val());
$password.val(temp);





    

    









}