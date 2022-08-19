// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function celTofaren(cel) {
    return (cel/5 * 9 + 32);
}
result_cel = celTofaren(1);
console.log(result_cel);

function farentocel(faren) {
    return (((faren - 32) * 5) / 9);
}
result_faren = farentocel(34);
console.log(result_faren);