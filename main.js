
/**
 * funtion "equals" with two parameters: 
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns true if the numbers are equal
 * false if the numbers are different
 */

 function equals(a, b) {
    if (a === b) {
        console.log("The numbers are equal");
        return true;
    }
    console.log("The numbers are not equal")
    return false;
}


/**
 * Function "compare" with 2 parameters:
 * 
 * @param {number} nr1 The first number to add
 * @param {number} nr2 The second number to add
 * @returns -1 if first number is smaller than the second one
 * 0 if the 2 numbers are equal
 * 1 if the the first number is higher than the second one
 */

 function compare(nr1, nr2) {
    if(nr1 < nr2) {
        return -1;
    }
    else if(nr1 === nr2) {
        return 0;
    }
    else if(nr1 > nr2){
        return 1;
    } 
}


/**
 * Function "max" with 2 parameteres: 
 * @param {number} nr1 The first number to add
 * @param {number} nr2 The second number to add
 * @returns the maximum between them
 */

 function max(nr1, nr2) {
    if(nr1 > nr2) {
        return nr1;
    }{ 
    return nr2;
    }
}


/**
 * Funcion "min" with 2 parameters:
 * @param {number} nr1 
 * @param {number} nr2 
 * @returns the minimum number between them
 */

 function min(nr1, nr2){
    if(nr1 < nr2){
        return nr1;
    }
    return nr2;
}


/**
 * Function "suma" with one parameter:
 * @param {number} n Number to add
 * @returns the sum of first n positive numbers 
 */

 function suma(n) {
    let sum = 0;
    for(let a = 1; a <= n; a++) {
        sum = sum + a;
    }
    return sum;
}


/**
 * function "prime" with one parameter:
 * @param {number} n 
 * @returns true is n is prime and false if it's not prime
 */

 function prim(n){
    if (n <= 1) {
        console.log(`${n} is not prime`);
        return false;
    }
    else if (n === 2 || n === 3) {
        console.log(`${n} is prime`);
        return true;
    }   

    else if(n > 1){ 
        for (let i = 2; i <=  Math.sqrt(n); i++) {
            if (n % i === 0 || n % Math.sqrt(n) === 0) {
                console.log(`${n} is not prime`);
                return false;
            }
        }
            console.log(`${n} is prime`);
            return true;
    }
}
prim();


/**
 * Function "sumaPrime" with one parameter
 * @param {number} n 
 * @returns the sum of n positive numbers
 */

 function sumaPrime(n){
    let array = [];
    let sum = 0;
    for(let i = 1; array.length < n; i++) {
            if (prim(i) === true){
                array.push(i);
                console.log(array);
            }  
        }
    for(let i = 0; i < n; i++){
        sum = sum + array[i];
    }
        console.log(`Sum of the first ${n} numbers is ${sum}`);
        return sum;
    }

    sumaPrime(10);


    /**
 * Function "invers" with one parameter:
 * @param {number} n 
 * @returns the inverse of n
 */

function invers(n){
    let array = [];
    for (let i = 0; n !=0; i++) {
        array[i]= n % 10;
        n = Math.floor(n / 10);
    }
    console.log(array);

    let inv = 0;
    let m = array.length - 1; 
    for(let i = 0; i < array.length; i++){
        inv = inv + array[i]*Math.pow(10, m);
        m = m - 1;
    } 
    console.log(inv);
    return inv;
}
invers(12345);


/**
 * Function "produsImpare" with one parameter: 
 * @param {number} n 
 * @returns the product of the first n numbers
 */

 function oddNumbers(n){
    if(n % 2 === 0){
        return false;
    }
    else if(n % 2 !== 0) {
        return true;
    }   
}
oddNumbers(5);

function produsImpare(n){
    let productOdds = 1;
    let array = [];
    for(let i = 1; array.length < n; i++){
        if (oddNumbers(i) === true){
            array.push(i);
            console.log(array);
        }
    }   
    for(let i = 1; i < n; i++)
        productOdds = productOdds * array[i];
        console.log(productOdds);
        return productOdds;
}
produsImpare(10);


/**
 * Function "contains" with 2 parameters
 * @param {array} arr 
 * @param {number} x 
 * @returns true if x is part of the array
 */

 function contains(arr, x){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === x){
            console.log(`${x} is part of ${arr}`);
            return true;
        }
    }
    console.log(`${x} is not part of ${arr}`);
    return false;
}
contains([1,2,3,4,5,6]);


/**
 * Function "maxArray" with one parameter
 * @param {array} array 
 * @returns the maximum value of the array
 */

 function maxArray(array){
    let max = array[0];
    for(let i = 1; i <= array.length; i++)
        if(max < array[i]){
            max = array[i];
        }
        console.log(`The maximum value of the array is ${max}`);
        return max;
}
maxArray([1,28,98,0,67,42]);


/**
 * Function "sumMinMax" with one parameter
 * @param {array} arr 
 * @returns The sum between the maximum and the minimum number
 */

function minArray(array){
    let min = array[0];
    for(let i = 1; i <= array.length; i++)
        if(min > array[i]){
            min = array[i];
        }
        console.log(`The maximum value of the array is ${min}`);
        return min;
}

function sumMinMax(arr){
    let sum = maxArray(arr) + minArray(arr);
    console.log(`The sum between the maximum number and the mininum number of ${arr} is ${sum}`);
    return sum;
}
sumMinMax([-1,-2,-3])


/**
 * Function "hasDuplicates" with one parameter:
 * @param {array} arr 
 * @returns if there are any duplicate numbers in the array
 */

 function hasDuplicates(arr) {
    arr.sort();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]) {
            console.log("has duplicates");
            return true;
        }
    }
    console.log("doesn't have duplicates")
    return false; 
}

hasDuplicates([1,2,3,4,5]);


/**
 * Function "produsPozitive" with one parameter:
 * @param {array} arr 
 * @returns the product of positive numbers
 */


 function produsPozitive(arr){
    let product = 1;
    for (let value of arr){
        if (value > 0){
            product = product * value;
        }
    }
    console.log(`The product of positive numbers is ${product}`);
    return product;
}
produsPozitive([1,2,3,4,5]);


/**
 * Function "palindrom" with one parameter:
 * @param {string} firstValue 
 * @returns If it's palindrome (true/false)
 */

 function palindrom(firstValue){
    let finalValue = "";
    for(let i = firstValue.length - 1; i >= 0 ; i--){
        finalValue = finalValue + firstValue.charAt(i);
    }
    if (firstValue === finalValue){
        console.log(`${firstValue} is palindrome`);
        return true;
    }
    console.log(`${firstValue} is not palindrome`);
    return false;
}
palindrom("12321");