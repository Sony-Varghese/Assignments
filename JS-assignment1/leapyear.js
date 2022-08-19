// function checkLeap(year) {

//     if (( year % 4 == 0 ) && ( year % 100 != 0) || ( year % 400 == 0)) 
//     {
//         console.log(year + ' is a leap year');
//     } 
//     else 
//     {
//         console.log(year + ' is not a leap year');
//     }
// }

// checkLeap(2004);

// function checkLeap(year) {

//     if (( year % 4 == 0 ) && ( year % 100 != 0) || ( year % 400 == 0)) 
//     {
//         return (year + ' is a leap year');
//     } 
//     else 
//     {
//         return (year + ' is not a leap year');
//     }
// }

// let result = checkLeap(year);
// console.log(result);

// let checkLeap = function(year) 
// {

//     if (( year % 4 == 0 ) && ( year % 100 != 0) || ( year % 400 == 0)) 
//     {
//         return (year + ' is a leap year');
//     } 
//     else 
//     {
//         return (year + ' is not a leap year');
//     }
// }

// let result = checkLeap(2017);
// console.log(result);
let checkLeap = (year) =>
{
    if (( year % 4 == 0 ) && ( year % 100 != 0) || ( year % 400 == 0)) 
    {
        return (year + ' is a leap year');
    } 
    else 
    {
        return (year + ' is not a leap year');
    }
}

let result = checkLeap(2016);
console.log(result);