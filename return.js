// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     // console.log(sum);
//     return sum;
// }
//     // add(12, 25)

//     var total = add( 15, 45);
//     console.log("total", total);
function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice ;
    return quantity ; 
}
var singaras = bringSingara(20);
console.log("Eating Singara:", singaras);
