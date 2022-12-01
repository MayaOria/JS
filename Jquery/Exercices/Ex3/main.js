let $btnAjouter = $('button');

let $total = $('input');
$total.val(0);

let $values;
$btnAjouter.each(function(){
    $(this).click(function (e){
        console.log($(this).prev())
        $values = getValues(getSiblings($(this)));
        createTd($values[0], $values[1]);
        addTotal($values[1]);
     
    })
}
    
)

const getSiblings = (elem)=>{
    let $trs = elem.prevAll();
    
    return $trs;
}

const getValues = (trs)=>{
    $nom = trs[0].val();
    $prix = trs[1].val();
    return $values = [$nom, $prix];
}

const createTd = (nom, prix)=>{
    let $td =  $('<td>');
    let $trNom = $('<tr>').val(nom);
    let $trPrix = $('<tr>').val(prix);
    $td.append($trNom);
    $td.append($trPrix);

}

const addTotal = (prix)=>{
    $total.val +=prix;
}