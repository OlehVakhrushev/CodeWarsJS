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

// switch is the keyword, n is the variable to switch, case 1 means when n===1,
//     following the ":",you can add some executable statement, with keyword
//     break as termination(if you forgot "break", code will running
//     with case 2, case 3...until a "break" appear),default like else in the if..else statement.

function howManydays(month){
    var days;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
    return days;
}

// You are required to create a simple calculator that returns the result of addition,
// subtraction, multiplication or division of two numbers.
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// if the variables are not numbers or the sign does not belong to the list above a
// message "unknown value" must be returned.

function calculator(a,b,sign){
    switch (sign) {
        case '+':
            if (typeof a === 'number' && typeof b === 'number') return a + b
            return  "unknown value";
        case '-':
            if (typeof a === 'number' && typeof b === 'number') return a - b
            return  "unknown value";
        case '*':
            if (typeof a === 'number' && typeof b === 'number') return a * b
            return  "unknown value";
        case '/':
            if (typeof a === 'number' && typeof b === 'number' && b !== 0) return a / b
            return  "unknown value";
        default:
            return "unknown value";
    }
}

// Даны два положительных целых числа n и k. Используя только операции сложения и вычитания,
//     найдите результат деления числа n на число k (частное), а также остаток от деления.
//     Напишите функцию с именем quotientAndRemainder, которая принимает
// два числа n, k и возвращает частное и остаток от деления в виде массива [quotient, remainder].
// функция quotientAndRemainder(5, 5) должна возвратить [1, 0];
// функция quotientAndRemainder(5, 2) должна возвратить [2, 1];
// функция quotientAndRemainder(12, 5) должна возвратить [2, 2];
// функция quotientAndRemainder(5, 7) должна возвратить [0, 5]

function quotientAndRemainder(n, k) {
    var quotient = 0;
    while (n > k) {
        n -= k;
        quotient++;
        if (n == k) {
            quotient++;
            n -= k;
        }
    }
    var remainder = n;
    return [quotient, remainder];
}

// Your task, is to create NxN multiplication table, of size provided in parameter.
//
//     for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        let str = [];
        for(let y = 1; y <= size; y++) {
            str.push(y*i);
        }
        arr.push(str);
    }
    return arr;
}

//
// Task:
//     You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//     Note:Returning the pattern is not the same as Printing the pattern.
//     Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.
// pattern(5):
//
// 1
// 22
// 333
// 4444
// 55555


function pattern(n){
    var output="";
    for(let i = 1; i <= n; i++) {
        output+= String(i).repeat(i)+ '\n';
    }
    return output.slice(0, -1);
}

// Task:
//     You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.
//
//     Note: Returning the pattern is not the same as Printing the pattern.
//     Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.
//
// pattern(4):
//
// 4321
// 432
// 43
// 4

function pattern(n){
    let output="";
    let str = [];
    for (let i = n; i >= 1; i--) {
        str.push(i);
    }
    while (str.length > 0) {
        output+= str.join('')+'\n';
        str = str.slice(0, -1);
    }
    return output.slice(0, -1);
}

// Complete the function power_of_two/powerOfTwo (or equivalent,
//     depending on your language) that determines
// if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//
//     a power of two is a number of the form 2n where n is an integer,
//     i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//
//     You may assume the input is always valid.
//     Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n){
    if (Number.isInteger(Math.log2(n)))   return true;
    return false;
}


// Дано целое положительное число n, которое равно 2, возведенной в некоторую степень k:
// Найдите эту степень (число k).
// Напишите функцию с именем powerOf2, которая принимает число n в качестве аргумента и
// возвращает число k, такое, что 2 в степени k равно n. При решении используйте цикл while и
// операции деления или умножения. Запрещается использовать методы объекта

function powerOf2(n){
    let k = 0;
    while (n > 1) {
        n = n / 2;
        k = k + 1;
    }
    return k;
}


// Дано целое положительное число n. Найдите факториал числа n (n! = 1 * 2 * 3 *... * n)
// //
// // Напишите функцию с именем factorial, которая принимает число n в качестве аргумента и
// // возвращает факториал числа n, т.е. произведение чисел от 1 до n. При решении используйте цикл while.
// //
// // Примеры:
// //
// //     функция factorial(2) должна возвратить 2;
// // функция factorial(3) должна возвратить 6;
// // функция factorial(8) должна возвратить 40320

function factorial(n){
    let fuc = 1;
    while (n > 0) {
        fuc = fuc * n;
        n -= 1;
    }
    return fuc;
}


// Найдите сумму нечетных чисел от 1 до n, т.е. 1 + 3 + 5 + ...
//
// Напишите функцию с именем sumOfOdd, которая принимает число n в качестве
// аргумента и возвращает cумму нечетных чисел от 1 до n. При решении используйте цикл while.
//
// Примеры:
//
// функция sumOfOdd(1) должна возвратить 1;
// функция sumOfOdd(3) должна возвратить 4;
// функция sumOfOdd(20) должна возвратить 100.

function sumOfOdd(n){
    let i = 1;
    let sum = 0;
    while (n > 0 && i <= n) {
        sum += i;
        i = i + 2;
    }
    return sum;
}


// Найдите произведение четных чисел от 2 до n, т.е. 2 * 4 * 6 * ...
//
// Напишите функцию с именем multOfEven, которая принимает число n в качестве аргумента
// и возвращает произведение четных чисел от 2 до n. При решении используйте цикл while.
//
// Примеры:
//
// функция multOfEven(2) должна возвратить 2;
// функция multOfEven(6) должна возвратить 48;
// функция multOfEven(10) должна возвратить 3840.

function multOfEven(n){
    let i = 2;
    let s = 1;
    while (n > 0 && i <= n) {
        s = s * i;
        i = i + 2;
    }
    return s;
}

// Напишите функцию с именем sumOfDigits, которая принимает неотрицательное
// число n (n>=0) в качестве аргумента и возвращает cумму цифр этого числа.
// При решении используйте цикл while. Запрещено использовать методы строк и массивов.
//
//     Примеры:
//
// функция sumOfDigits(25) должна возвратить 7;
// функция sumOfDigits(658) должна возвратить 19;
// функция sumOfDigits(13881) должна возвратить 21

function sumOfDigits(n) {
    let sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Напишите функцию с именем numberOfDigits, которая принимает неотрицательное
// число n (n>=0) в качестве аргумента и возвращает количество цифр этого числа.
// При решении используйте цикл while. Запрещено использовать методы и свойства строк и массивов.
//
//     Примеры:
//
// функция numberOfDigits(2) должна возвратить 1;
// функция numberOfDigits(63) должна возвратить 2;
// функция numberOfDigits(10123) должна возвратить 5

function numberOfDigits(n){
    let count = 0;
    while (n > 1) {
        n = n / 10;
        count += 1;
    }
    return count;
}

// Ученик к моменту начала обучения не знает ни одного английского слова.
// В первый день занятий он выучил 5 английских слов. В каждый последующий
// день он выучивал на 2 слова больше, чем в предыдущий. Через сколько дней ученик будет
// знать не менее n английских слов?
// Напишите функцию с именем englishWords, которая принимает в качестве аргумента неотрицательное
// число n (n>=0) (количество английских слов, которые хочет выучить ученик) и возвращает
// количество дней, которые необходимы для изучения n слов.
//     Примеры:
// функция englishWords(5) должна возвратить 1; // 5 слов ученик может выучить за 1 день.
// функция englishWords(10) должна возвратить 2; // 10 слов ученик может выучить за 2 дня (5 + 7 = 12)
// функция englishWords(20) должна возвратить 3. // 20 слов ученик может выучить за 3 дня (5 + 7 + 9 = 21)
// функция englishWords(30) должна возвратить 4. // 30 слов ученик может выучить за 4 дня (5 + 7 + 9 + 11 = 32)

function englishWords(n) {
    let days = 0;
    let words = 5;
    let totalWords = 0
    while (totalWords < n) {
        totalWords += words;
        words = words + 2;
        days++;
    }
    return days
}


// Recreation of Project Euler problem #6
// Find the difference between the sum of the squares of the
// first n natural numbers (1 <= n <= 100) and the square of their sum.
//     Example
// For example, when n = 10:
// The square of the sum of the numbers is:
// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
// The sum of the squares of the numbers is:
// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385
// Hence the difference between square of the sum of the first ten natural numbers
// and the sum of the squares of those numbes is: 3025 - 385 = 2640

function differenceOfSquares(n){
    let squareOfSum = 0;
    let sumOfSquare = 0;
    let sum = 0;
    while( n >= 0 && n <= 100) {
        sum = (n * (n + 1)) / 2;
        sumOfSquare = (n * (n + 1) * (2 * n + 1)) / 6;
        squareOfSum = sum * sum;
        return squareOfSum - sumOfSquare;

    }
}

// My friend John likes to go to the cinema. He can choose between system A and system B.
//
//     System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
//     then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
//     #Example: If John goes to the cinema 3 times:
//
//     System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
// John wants to know how many times he must go to the cinema so that the final
// result of System B, when rounded up to the next dollar, will be cheaper than System A.
//
//     The function movie has 3 parameters: card (price of the card), ticket
// (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that
//
// ceil(price of System B) < price of System A.

function movie(card, ticket, perc) {
    var costA = n = 0,
        costB = card;
    while (Math.ceil(costB) >= costA) {
        costA += ticket;
        costB += ticket * Math.pow(perc,++n);
    }
    return n;
};

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know
// // how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// // The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly.
// //     After paying taxes 'T' for the year the new sum is re-invested.
// //     Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        let gains = principal * interest - (principal * interest * tax);
        principal += gains;
        years ++;
    }
    return years;
}

// Task
// Write a method remainder which takes two integer arguments,
//     dividend and divisor, and returns the remainder when dividend is divided by divisor.
//     Do NOT use the modulus operator (%) to calculate the remainder!
//     Assumption
// Dividend will always be greater than or equal to divisor.
//     Notes
// Make sure that the implemented remainder function works exactly the same as the Modulus operator (%).

function remainder(D, d) {
    return D - Math.trunc(D / d) * d
}


// Numbers ending with zeros are boring.
//
//     They might be fun in your world, but not here.
//
//     Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    return Number(`${n}`.replace(/0+$/, ''));
}

// Yor task is to write function factorial

function factorial(n){
    let f = 1;
    if (n === 1 || n === 0) {
        return 1;
    } else {
        for (let i = n; i >= 1;i--) {
            f = f * i
        }
        return f;
    }
}

//
// Given a positive integer N, return the largest integer k such that 3^k < N.
//     For example,
// largest_power(3) == 0
// largest_power(4) == 1
// You may assume that the input to your function is always a positive integer.

    function largestPower(n){
    return Math.ceil(Math.log10(n) / Math.log10(3)) - 1;
}

// Description:
//     #Task:
// Write a function that returns true if the number is a "Very Even" number.
//     If a number is a single digit, then it is simply "Very Even" if it itself is even.
//     If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".
// #Examples:
// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd
// input(222) => returns true
// input(5) => returns false
// input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// Note: The numbers will always be 0 or positive integers!

function isVeryEvenNumber(n) {
    if ((n - 1) % 9 % 2 != 0) {
        return true;
    } else {
        return false;
    }
}


// Get the next prime number!
//     You will get a numbern (>= 0) and your task is to find the next prime number.
//     Make sure to optimize your code: there will numbers tested up to about 10^12.
//
// Examples
// 5   =>  7
// 12  =>  13


function nextPrime(n){
    if (n === 0) return 2;
    for (let i = n + 1; ;i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i;j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }

        }
        if (isPrime) {
            return i;
        }
    }

}

//
// I assume most of you are familiar with the ancient legend of the rice
// (but I see wikipedia suggests wheat, for some reason) problem,
// but a quick recap for you: a young man asks as a
// compensation only 1 grain of rice for the first square, 2 grains for the second,
// 4 for the third, 8 for the fourth and so on, always doubling the previous.
// Your task is pretty straightforward (but not necessarily easy): given an amount of grains,
// you need to return up to which square of the chessboard one should count in order to get at least as many.

function squaresNeeded(grains){
    let square = 0;
    let sum = 0;
    while (sum < grains) {
        sum += 2 ** square;
        square++;
    }
    return square;
}

// Дано два числа n и m. Найдите сумму всех целых чисел от n до m включительно.
//
//     Напишите функцию с именем sumFromNToM, которая принимает два числа n, m и возвращает сумму чисел от n до m. В решении используйте цикл for.
//
// Примеры:
//
//     функция sumFromNToM(5, 5) должна возвратить 5;
// функция sumFromNToM(5, 2) должна возвратить 0;
// функция sumFromNToM(12, 13) должна возвратить 25;
// функция sumFromNToM(5, 7) должна возвратить 18.


function sumFromNToM(n, m){
    let sum = 0;
    for (let i = n; i <= m;i++) {
        sum += i;
    }
    return sum;
}

// Дано число  n > 0 . Найдтиие дроби
// 1+2+3+4...+n
// 1*2*3*4...*n
//
// Напишите ф-цию. с именем fractional, которая принемает число n, и возвращает значение дроби.
// Значение округлите до 3х десятичных знаков.
function fractorial(n) {
    let sum = 0;
    let fuc = 1;
    let f = sum / fuc;
    for (let i = 1; i <= n;i++) {
        sum += i;
        fuc *= i;
        f = sum / fuc;

    }
    return +f.toFixed(3);
}
//
// Дано число n > 0. Определите, является ли данное число n простым.
//     Число называется простым, если оно делится только на 1 и на самого себя
// (т.е. число делителей числа равно 2). Например, числа 2, 3, 5, 5, 7, 11, 13, 17, 19 – простые.
//     Число 1 не является ни простым, ни составным.
//     Напишите функцию с именем isPrime, которая принимает число n и возвращает true, если число простое, и false - в противном случае.
//     Примеры:
//
// функция isPrime(1) должна возвратить false;
// функция isPrime(2) должна возвратить true;
// функция isPrime(29) должна возвратить true;
// функция isPrime(30) должна возвратить false.

function isPrime(n){
    if (n === 1) return false;
    let count = 0;
    for (let i = 1; i <= n;i++) {
        if(n % i === 0) {
            count++;
        }
    }
    return count === 2 ? true : false;
}


// Не пользуясь операцией возведения в степень, возвести число a в степень n.
//     power
// Напишите функцию с именем power, которая принимает числa a и n в качестве аргументов и
// возвращает значение a в степени n (a и n - целые неотрицательные числа).
// В решении используйте цикл for. В этом задании нельзя использовать операцию возведения в
// степень и методы объекта Math.
//     Примеры:
// функция power(3, 3) должна возвратить 27;
// функция power(3, 0) должна возвратить 1;
// функция power(0, 0) должна возвратить 1;
// функция power(2, 5) должна возвратить 32.


function power(a, n){
    let res = 1;
    for (let i = 0; i < n;i++) {
        res = res * a;
    }
    return res;
}
//
// Числа Фибоначчи - последовательность, в которой первые два числа равны 0 и 1,
//     а каждое последующее число равно сумме двух предыдущих чисел: 0, 1, 1, 2, 3, 5, ...
// Напишите функцию с именем fibonacciNumbers, которая принимает число n (n >= 2) в качестве
// аргумента и возвращает массив из n чисел Фибоначчи.
//     Примеры:
// функция fibonacciNumbers(2) должна возвратить [0, 1];
// функция fibonacciNumbers(5) должна возвратить [0, 1, 1, 2, 3];
// функция fibonacciNumbers(7) должна возвратить [0, 1, 1, 2, 3, 5, 8].

function fibonacciNumbers(n){
    let arr = [0, 1];
    for (let i = 2;i < n;i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}


// # Count the divisors of a number
// # Count the number of divisors of a positive integer n.

    function getDivisorsCnt(n){
    let div = 0;
    for (let i = 1; i <= n;i++) {
        if (n % i === 0) {
            div += 1;
        }
    }
    return div
}


// Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

const divisors = (num) => {

    let retArr = [];

    if(isPrime(num)) {    // Вставляем нашу ф-цию, если число прайм
        return num + ' is prime';
    }

    for(let i = 2; i < num; i++) {

        if(num % i === 0) {
            retArr.push(i);
        }

    }
    return retArr;
}

function isPrime (num) {   // находим если число прайм

    for(let i = 2; i < num; i++) {

        if(!(num % i)) {
            return false;
        }

    }
    return true;
}


console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));

//best practice solution

function divisorss(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i === 0) res.push(i);
    return res.length ? res : integer + ' is prime'
}

// Task:
//     Your task is to write a function which returns the sum of following series upto nth term(parameter).
//     Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
//     You need to round the answer to 2 decimal places and return it as String.
//     If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

// Sum of the first nth term of Series
function SeriesSum(n) {
    let result = 0;
    let reverage = 1;
    for (let i = 0; i < n; i += 1) {
        if (i === 0) {
            result = 1;
        } else {
            reverage += 3;
            result = result + (1 / reverage);
        }
    }
    return result.toFixed(2);
};


// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example:
//
//     summation(2) -> 3
// 1 + 2
//
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 +

var summation = function (num) {
    let sum = 0 ;
    while (num > 0) {
        sum += num;
        num = num - 1;
    }
    return sum;
}

// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between including them too and return it.
// If the two numbers are equal return a or b.
//     Note: a and b are not ordered!
//     Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum(a,b){
    let count = 0;
    if (a == b) return a;
    if(a < b){
        for (; a <= b; a++){
            count += a;
        }
    } else if (a > b){
        for(; b <= a; b++){
            count += b;
        }
    }
    return count;
}

// Training JS #10: loop statement --for
//     Task
//     Coding in function pickIt, function accept 1 parameter:arr, it's a number array, ' +
// 'we need traverse arr by using for loop, if element is odd number, push it to array odd, if it'
// s a even number, push it to array even.
//     I've defined two array odd and even in the function, and also wrote the return statement.' +
// ' your work is write a for loop.
// If you forgot how to push an element to array, please refer to lesson 4.

const pickIt = array => {
    for (let i = 0; i < array.length; i++) {}
    return [array.filter(number => number % 2 !== 0), array.filter(number => number % 2 === 0)]
}

// Sum of Multiples
// Find the sum of all multiples of n below m
//
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

const sumMul = (n, m) => {
    if (n >= m) return 'INVALID'

    const last = Math.ceil(m / n) * n - n
    return (last + n) * (last / n) / 2
}


// Reversed sequence
// Get the number n (n>0) to return the reversed sequence from n to 1.
//
// Example : n=5 >> [5,4,3,2,1]


const reverseSeq = n => {
    let arr = [];
    for (i = n; i >= 1;i--) {
        arr.push(i);

    }
    return arr;
};


// lucky number
// // ###Lucky number
// // Write a function to find if a number is lucky or not.
// //     If the sum of all digits is 0 or multiple of 9 then the number is lucky.
// // 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
// //     Function will return true for lucky numbers and false for others.

function isLucky(n) {
    let sumOfNum = 0;
    while (n != 0) {
        sumOfNum += n % 10;
        n = Math.floor(n / 10);
    }
    if (sumOfNum === 0 || sumOfNum % 9 === 0) return true;
    else return false;
}

// First non-repeating character
// Write a function named first_non_repeating_letter that takes a string input,
//     and returns the first character that is not repeated anywhere in the string.
//     For example, if given the input 'stress', the function should return 't',
//     since the letter t only occurs once in the string, and occurs first in the string.
//     As an added challenge, upper- and lowercase letters are considered the same
// character, but the function should return the correct case for the initial letter.
//     For example, the input 'sTreSS' should return 'T'.
//     If a string contains all repeating characters, it should return an empty string
// ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    s = s.split('')
        .filter(el => s.toLowerCase().indexOf(el.toLowerCase()) === s.toLowerCase().lastIndexOf(el.toLowerCase()));
    return (s.length === 0)? '' : s[0];
}

// Sum of Triangular Numbers
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
//     Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
    let sum = 0
    for (let i = 1; i <= n;i++) {
        sum += i * (i + 1) / 2;
    }
    if (sum <= 0) return 0;
    return sum;
}

// Draw stairs
// Given a number n, draw stairs using the letter "I", n
// tall and n wide, with the tallest in the top left.
//     For example n = 3 result in:


function drawStairs(n) {
    let cnt = 0;
    let result = '';
    while(n > cnt){
        result += ' '.repeat(cnt) + 'I';
        cnt++;
        if(n > cnt) result += '\n';
    }
    return result;
}

// Divisible by 9?
//     Given a non-negative integer number represented as a string, which can be arbitrary large. Detect whether it is divisible by 9?
//     e.g
//     0 -> true
// 7 -> false
// 9 -> true
// 18 -> true
// 19 -> false
// 777777777777777777777777777777777777777777777 -> true
// Tips:
//
//     All input strings in the tests are valid non-negative integer numbers,
//     you don't have to check that.
// You'd better not use the arbitrary-precision data types from chosen programming languages, ' +
// 'if any, to keep the kata fun :) , (for Java avoid BigInteger or BigDecimal, for ' +
// 'Javascript avoid BigInt, etc).


function divBy9(ns){
    const input = BigInt(ns)
    if (ns === "0") {
        return true;
    }else{
        return input % 9n === 0n ?  true : false;
    }
}


// How much coffee do you need?
// //     Everybody know that you passed to much time awake during night time...
// // Your task here is to define how much coffee you need to stay awake
// // after your night. You will have to complete a function that take an array of events
// // in arguments, according to this list you will return the number of coffee you need to stay
// // awake during day time. Note: If the count exceed 3 please return 'You need extra sleep'.
// //     The list of events can contain the following:
// //     You come here, to solve some kata ('cw').
// //     You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').
// //     You just watch a movie ('movie').
// //     Other events can be present and it will be represent by arbitrary string, just ignore this one.
// //     Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.


function howMuchCoffee(events) {
    let arr = ['cw', 'cat', 'movie', 'dog'];
    events = events.filter(el => arr.includes(el.toLowerCase()))
        .map(el => el === el.toLowerCase() ? 1 : 2)
        .reduce((acc, el) => acc + el, 0);
    return events > 3 ? 'You need extra sleep' : events;
}


// Fruit string calculator
// Given a string of words and numbers. Extract the expression including:
//     the operator: either addition or subtraction
// the two numbers that we are operating on
// Return the result of the calculation.
//     Example:
// "Panda has 48 apples and loses 4" returns 44
// "Jerry has 34 apples and gains 6" returns 40
// "loses" and "gains" are the only two words describing operators.
//     Should be a nice little kata for you :)
// Note: No fruit debts nor bitten apples = The numbers are integers and no negatives


function calculate(string) {
    let arr = string.split(' ').filter(el => +el).map(el => +el)
    return string.includes('loses')? arr[0] - arr[1] : arr[0] + arr[1];
}



// Remove the time
// You're re-designing a blog and the blog's posts have the following format for
//     showing the date and time a post was made:
//     Weekday Month Day, time e.g., Friday May 2, 7pm
// You're running out of screen real estate, and on some pages you want ' +
// 'to display a shorter format, Weekday Month Day that omits the time.
// Write a function, shortenToDate, that takes the Website date/time
// in its original string format, and returns the shortened format.
//     Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm".' +
// ' Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
    let a = longDate.split(',');
    return a[0];
}


// Do you speak retsec?
//     You and your friends want to play undercover agents.
//     In order to exchange your secret messages, you've come up with the following system: you take' +
// ' the word, cut it in half, and place the first half behind the latter. ' +
// 'If the word has an uneven number of characters, you leave the middle at its previous place:
// retsec examples
// That way, you'll be able to exchange your messages in private.
// Task
// You're given a single word. Your task is to swap the halves. ' +
// 'If the word has an uneven length, leave the character in the middle ' +
// 'at that position and swap the chunks around it.


function reverseByCenter(s){
    let i = Math.trunc(s.length / 2);
    return s.length % 2 === 0 ? s.slice(i) + s.slice(0, i) : s.slice(i + 1) + s[i] + s.slice(0, i);
}


// All Star Code Challenge #15
// This Kata is intended as a small challenge for my students
// Your family runs a shop and have just brought a Scrolling
// Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.
// The scroller works by replacing the current text string with a similar text
// string, but with the first letter shifted to the end; this simulates movement.
//     You're father is far too busy with the business to worry about such details, so, naturally, he's
// making you come up with the text strings.
//     Create a function named rotate() that accepts a string argument and returns an array of
// strings with each letter from the input string being rotated to the end.
// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array The order matters.
//     Each element of the output array should be the rotated version of the previous element.
//     The output array SHOULD be the same length as the input string The function should return an emptry array with a 0 length string, '', as input

function rotate(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        str = str.slice(1) + str[0];
        arr.push(str);
    }
    return arr;
}


// Figurate Numbers #2 - Pronic Number
// You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.
//     Description:
// Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).
//     The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...
//     Explanation:
// 0 = 0 × 1   // ∴  0 is a Pronic Number
// 2 = 1 × 2   // ∴  2 is a Pronic Number
// 6 = 2 × 3   // ∴  6 is a Pronic Number
// 12 = 3 × 4   // ∴ 12 is a Pronic Number
// 20 = 4 × 5   // ∴ 20 is a Pronic Number
// 30 = 5 × 6   // ∴ 30 is a Pronic Number
// 42 = 6 × 7   // ∴ 42 is a Pronic Number

const isPronic = n => {
    for (let i = 0; i <= n; i++) {
        if (n === i * (i + 1)) return true
    }
    return false
}


// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
//     Examples:
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
//     Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.

function roundToNext5(n){
    return Math.ceil(n / 5) * 5;
}

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
// // Examples
// // numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// // numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// // numberToPower(10,6) // -> 1000000
// // Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
    let result=1;
    for (let i=1;i<=power;i++){ result*=number}
    return result
}


// Switcheroo
// Given a string made up of letters a, b, and/or c, switch the position
//     of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//     Example:
//     'acb' --> 'bca'
//     'aabacbaa' --> 'bbabcabb

function switcheroo(x){
    return x.replace(/a/g, 'B').replace(/b/g, "a").toLowerCase();
}

// Filter the number
//
// Your task is to return a number from a string.
//     Details
// You will be given a string of numbers and letters mixed up, you have to return
// all the numbers in that string in the order they occur.

var FilterString = function(value) {
    return +value.replace(/[^0-9]/g, '');
}

// Vasya in his free time
// Vasya has a very limited amount of free time. During these precision minutes
// he likes to think about strings containing zeros and ones.
//     Vasya considers the following operation: he chooses any two adjacent positions
// in the string, and if one of them contains 0, and the other contains 1, then we are
// allowed to remove these two digits from the string.
//     Now Vasya thinks of what is the minimum length of the string that can remain after
// applying the described operation several times (possibly, zero)? Help him to calculate this number.

function CalculateString( n,  nums)
{
    let ones = 0;
    for (element of nums) {
        if (element === "1") {
            ones++;
        }
    }
    let zeros = n - ones;
    return Math.abs(ones - zeros);
}


// Palindrome checker
// // According to Wikipedia, a palindrome is "a word, phrase, number, or other " +
// // "sequence of characters which reads the same backward or forward." Examples of
// // palindromes include "racecar", "tacocat", and "123454321".
// //     Capitalization, punctuation, and word dividers will be ignored when checking if
// //     a string is a palindrome. For example, "Was it a car or a cat I saw?" is a valid
// // palindrome in context of this Kata.
// //     All requirements from definition should be fulfilled.
// //     If the given string is a palindrome, return true.
// //     If not, or in case of null input (None for Python) return false.

function isPalindrome(str) {
    if (str === null ) return false;
    str = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    return str.split("").reverse().join('') === str;
}

// OR LIKE THAT


function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "").toLowerCase() ===
        str
            .replace(/[\W_]/g, "")
            .toLowerCase()
            .split("")
            .reverse()
            .join("")
    );
}


// Check the exam
// // The first input array is the key to the correct answers to an exam,
// //     like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// // The two arrays are not empty and are the same length.
// //     Return the score for this array of answers, giving +4 for each
// //     correct answer, -1 for each incorrect answer, and +0 for each blank
// // answer, represented as an empty string (in C the space character is used).
// // If the score < 0, return 0.


const checkExam = (answers, responses) => {
    const score = responses.reduce((total, response, index) => {
        if (!response) return total
        if (response === answers[index]) return total + 4
        if (response !== answers[index]) return total - 1

        return total
    }, 0)

    return score > 0 ? score : 0
}

// Function Export
module.exports = checkExam


// Work with OBJECTS
// Write a function that counts the letters in a string in object notation.
//     Input
// A string. e.g. "Hello World" If input is anything other than a string, it should return null
// Should be an object of the letters and how often they show up. e.g. { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
// Case-insensitive. So convert all letters to lowercase
// Ignore whitespace
// Ignore anything not a-z

function countLetters (string) {
    if (typeof string !== 'string') return null;
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    let obj = {};
    for (letter of string) {
        if(letter in obj) {
            obj[letter]++;
        }
        else {
            obj[letter] = 1;
        }
    }
    return obj;
}


// Pyramin Pattern



function stars(n) {
    let str = '';
    for (let i = 1;i <= n;i++) {
        str += '*'.repeat(i) + '\n';
    }
    return str.slice(0, -1);
}

console.log(stars(5));



let string = 'example';

console.log(string.slice(1, -1));


function f(n) {
    let result = '';
    for (let i = 1; i <= n; i= (i+2)) {
        result += " ".repeat((n - i) / 2) + '*'.repeat(i) + " ".repeat((n - i) / 2) + '\n';
    }
    return result.slice(1, -1);
}

console.log(f(5));



// Method MAP

let arr = [1, 5, 7, 9, 0];
let arr1 = arr.map(el => el * 2);
let arr2 = arr.map(function(el){
    return el * 2;
});

console.log(arr1);
console.log(arr2);

function oleg(g) {
    return g.map( function(el){
        if (el % 2 === 0) {
            return el / 2;

        } else {
            return el;
        }
    })
}

# 1. Name research
import random
name = input('What\'s your name? ')
if bool(random.getrandbits(1)) :
intro = '{}, you name '.format(name)
lt = 'letter'
wlt = 's with ' + lt
print(f'{intro} has {len(name)} {lt}s')
print(f'{intro} start{wlt} {name[0]}')
print(f'{intro} end{wlt} {name[-1]}')
elif bool(random.getrandbits(1)) :
print(f'{name}, your name has {len(name)} letters')
print(f'{name}, your name starts with letter {name[0]}')
print(f'{name}, your name ends with letter {name[-1]}')
else :
print('{0}, your name has {n} letters\n {0}, your name starts with letter {l1}\n {0}, your name ends with letter {l_end}'.format(name,n=len(name),l1 = name[0],l_end=name[-1]))

print()

# 2. Mirror name
# name = input('What\'s your name? ')
# (we already know your name)

mirror_name = name[-1].upper() + name[-2::-1].lower()
print(f'{name}, your mirror name is {mirror_name}')
print()

# 3. Phone format
pn = input('Enter 10 digits phone number ')
pn = (pn + '0000000000')[:10] # Make sure it's 10 digits
# Creating format (+012) 345-6789 (0-9 - indexes)
pn = '(+' + pn[0:3] + ') ' + pn[3:6] + '-' + pn[6:]
print(pn)
print()

# 4. email generator
fname = input('What\'s your full name? ')
i = fname.find(' ')
email1 = fname[0:i] + '.' + fname[i+1:] + '@company.com'
email2 = fname[i+1:] + '.' + fname[0:i] + '@company.com'
email3 = fname[0] + '.' + fname[i+1:] + '@company.com'
email4 = fname[i+1:] + pn[-4:] + '@company.com'
print('Available emails for registration:')
print(email1)
print(email2)
print(email3)
print(email4)
print()

# 5. frame your name
print('*' * (len(name)+4))
print('* ' + name + ' *')
print('*' * (len(name)+4))
print()

print('╔' + '═' * (i + 2) + '╦' + '═' * (len(fname) - i + 1) + '╗')
print('║ ' + fname[0:i] + ' ║ ' + fname[i+1:] + ' ║')
print('╚' + '═' * (i + 2) + '╩' + '═' * (len(fname) - i + 1) + '╝')


#1. С помощью команды input введите трехзначное число и найдите сумму его цифр.
print("Задание 1.")
print('')
number = (input ("Enter a three-digit number: "))
total_sum = int(number[0])+int(number[1])+int(number[2])
print(f"Sum of 3 digits in the three-digit number is {total_sum}")
#2. С помощью команды input введите число сторон правильного многоугольника и найдите сумму его внутренних углов. Сумма углов n-угольника равна 180*(n-2)
print('')
print("Задание 2.")
sides = int(input("Enter the number of sides of a polygon: "))
exterior_angl_sum = 180 *(sides-2)
print(f"Sum of the exterior angles of a polygon equals: {exterior_angl_sum} ")
#3. С помощью команды input запросите у пользователя количество миль. Переведите это расстояние в километры и футы. 1 mile = 1.60934 km, 1 mile = 5280 feet.
print('')
print("Задание 3.")
miles = int(input("Enter the amount of miles: "))
m_to_km = 1.60934
km_in_miles = round(m_to_km * miles,1) # округлить до одного знака после запятой
feet = 5280
feet_in_miles = round(km_in_miles * feet,1)
print(f"There are {km_in_miles} kilometers in {miles} miles, or {feet_in_miles} feet. ")
#4. С помощью команды input запросите у пользователя число градусов Фаренгейта и переведите это значение в градусы цельсия. Для этого нужно от числа градусов фаренгейта отнять 32, результат умножить на 5 и затем поделить на 9.
print('')
print("Задание 4.")
fahr = int(input("Enter degrees in Fahrenheit: "))
cels = round((fahr-32)*5/9)
print(f"{fahr} degrees Fahrenheit is {cels} degrees Celsius.")
#5. С помощью команды input запросите у пользователя число градусов цельсия. Напишите программу перевода градусов цельсия в градусы фаренгейта. Для этого нужно число градусов цельсия умножить на 9, затем разделить на 5 и затем к результату прибавить 32.
print('')
print("Задание 5.")
cels = int(input("Enter degrees in Celsius: "))
fahr = round(cels*9/5+32)
print(f"{cels} degrees Celsius is {fahr} degrees Fahrenheit.")
#6. С помощью команды input запросите у пользователя стоимость заказа, процент чаевых (tip_percent) и процент налогов (tax_percent). Найдите общую стоимость заказа (total_price).
print('')
print("Задание 6.")
price=int(input("Please enter the price of the order: "))
tip_percent = int(input("Please enter percentage amount of a tip :  "))
tax_percent= float(input("Please enter tax percentage amount: "))
tip_percent_conv = tip_percent/100 # перевести число, введенное пользователем, в десятичную дробь для корректного вычисления.
    #ВОПРОС - если я ввожу не целое число в "Please enter percentage amount of a tip", а десятичное, например "2.3", то программа не работает. Почему?
    tax_percent_conv = tax_percent/100
    total_price = round(price + (price*tip_percent_conv)+ (price*tax_percent_conv),2)
print(f"Total price of the order is {total_price} dollars")
#7. С помощью команды input введите цену товара со скидкой и процент скидки. Найдите цену товара до скидки(полеую цену товара), результат округлите до 2-х знаков после зарятой. Например, товар со скидкой стоит 40 долларов прискидке 50%. Тогда цена товара без скидки составляет 80 долларов.
print('')
print("Задание 7.")
disc_price = int(input("Please enter the discounted price in dollars: "))
discount = int(input("Please enter percentage amount of the discount: "))
disc_price_perc = 100 - discount # находим сколько процентов от исходной суммы представляет собой цена предмета со скидкой.
    total_price = round(disc_price*100/disc_price_perc,2)
print(f"Original price for the discounted item is {total_price} dollars.")