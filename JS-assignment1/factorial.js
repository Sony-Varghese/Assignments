// Write a program to find the factorial of a number.
function factorial(num) {
    if (num < 0)
        return 0;
    else if (num === 0 || num === 1 )
        return 1
    else {
        return num * factorial(num-1);
        }
    }

let num = 8
let answer = factorial(num);
console.log("Factorial of " + num + " is " + answer);