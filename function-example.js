// function functionName (parameters){
//     // function body
//     // return
// }
// functionName(parameters value)

function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3 ;
    const average = total / 3 ;
    return average
}
const assignment1Mark = 60;
const assignment2Mark = 37;
const assignment3Mark = 60;
var myAverage = getAverage(assignment1Mark, assignment2Mark, assignment3Mark);
console.log("My Assignment so far:", myAverage);