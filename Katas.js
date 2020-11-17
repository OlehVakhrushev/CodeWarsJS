// =begin
// Triangular numbers are so called because of the equilateral triangular shape
// that they occupy when laid out as dots. i.e.
// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
// *         **
// *
// You need to return the nth triangular number. You should return 0 for out of
//     range values:
//     triangular(0)==0,
//     triangular(2)==3,
//     triangular(3)==6,
//         triangular(-10)==0
//             =end
//
// # My Solution
// def triangular( n )
num = 0
1.upto(n) {|x| num += x}
num
end

// # Better Solution
def triangular( n )
n < 0 ? 0 : (n*n+n)/2
end

// # Another Solution
def triangular(n)
(1..n).reduce(0, &:+)
end

// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:
//
//     If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
//
// I'll give you a few hints:
//
// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.


function describeAge(a){
    return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`
}

// Your friend has been out shopping for puppies (what a time to be alive!)...
// He arrives back with multiple dogs, and you simply do not know how to respond!
// By repairing the function provided, you will find out exactly how you should respond,
// // depending on the number of dogs he has.
// // The number of dogs will always be a number and there will always be at least 1 dog.


const howManyDalmatians = number => {
    if (number <= 10) return 'Hardly any'
    if (number <= 50) return 'More than a handful!'
    if (number >= 51 && number <= 100) return "Woah that's a lot of dogs!"
    if (number === 101) return '101 DALMATIANS!!!'
    return "Woah that’s a lot of dogs!"
}

//
// I have a cat and a dog which I got as kitten / puppy.
//     I forget when that was, but I do know their current ages as catYears and dogYears.
//     Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
//
// NOTES:
//
//     Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var ownedCatAndDog = function(catYears, dogYears) {
    if (catYears < 15)
        ownedCat = 0;
    else if (catYears >= 15 && catYears <= 23)
        ownedCat = 1;
    else if (catYears === 24)
        ownedCat = 2;
    else if (catYears > 24)
        ownedCat = Math.floor(((catYears - 24) / 4) + 2);

    
    if (dogYears < 15)
        ownedDog = 0;
    else if (dogYears >= 15 && dogYears <= 23)
        ownedDog = 1;
    else if (dogYears === 24)
        ownedDog = 2;
    else if (dogYears > 24)
        ownedDog = Math.floor(((dogYears - 24) / 5) + 2);
    return [ownedCat, ownedDog];
}

//
// Given the sum and gcd of two numbers, return those two numbers in ascending order.
//     If the numbers do not exist, return -1,

function findGcd(a, b) {
    if (b === 0) {return a}
    return findGcd(b, a%b);
}
function solve(s,g){
    if (findGcd(g, s - g) === g
        && s !== g) {
        return [Math.min(g, s - g),
            s - Math.min(g, s -g)]
    } else return -1;
}

//
// Write a function called calculate that takes 3 values.
// The first and third values are numbers. The second value is a character.
// If the character is "+" , "-", "*", or "/", the function will return the result
// of the corresponding mathematical function on the two numbers.
// If the string is not one of the specified characters, the function should return null
// (throw an ArgumentException in C#).

function calculate(num1, operation, num2) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            if (num2 === 0) return null;
            return num1 / num2;
        case "*":
            return num1 * num2;
        default:
            return null;
    }
}

// Implement function which will
// return sum of roots of a quadratic equation rounded to 2 decimal places,
// if there are any possible roots, else return None/null/nil/nothing.
// If you use discriminant,when discriminant = 0,
// x1 = x2 = root => return sum of both roots.
// There will always be valid arguments.
a = 2;
b = 3;
c = 5;
function roots(a,b,c){

    let d = (b ** 2) - (4 * a * c);
    let x1 = (-b - (d ** 0.5)) / (2 * a);
    let x2 = (-b + (d ** 0.5)) / (2 * a);
    if (d > 0) {
        return Number((x1 + x2).toFixed(2));
    } else if (d === 0) {
        return Number((x1 * 2).toFixed(1));
    } else {
        return null;
    }

}
print roots(a, b, c);