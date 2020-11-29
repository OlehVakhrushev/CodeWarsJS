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
