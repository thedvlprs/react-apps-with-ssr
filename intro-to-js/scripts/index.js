var ResultContainer = document.getElementById('ResultContainer');
// ResultContainer.innerHTML = 'Setting up the environment!';

// TODO: Constants and Varianle Declaration

// if (true) {
//     let letVariable = 'Variable using var';
// }
// ResultContainer.innerHTML = letVariable;

// if (true) {
//     var varVariable = 'Variable using var';
// }
// ResultContainer.innerHTML = varVariable;

// TODO: Rest Parameter
//? When we declare a function with rest parameter and invoke it, JavaScript automatically takes in all the arguments we pass to the function and clubs it into an array.
/* Rest parameter is a feature of JavaScript that was introduced in ES6. It lets us handle multiple function input parameters as an array. It is particularly helpful in scenarios where the number of input parameters to a function is indefinite. */
/* function sum(...inputs) {
    var result = 0;
    for (let i of inputs) {
        result += i;
    }
    return result;
}
ResultContainer.innerHTML = sum(5, 10, 5, 5); */

/* function sum(input1, input2, ...remainingInputs) {
    var result = input1 + input2;
    for (let i of remainingInputs) {
        result += i;
    }
    return result;
}
ResultContainer.innerHTML = sum(5, 10, 5, 5); */

// TODO: Destructuring and Spread Syntax
/* Destructuring is another feature of JavaScript that was introduced in ES6 and is exactly opposite of rest parameter. While rest parameter is about assigning multiple values to a single array, destructuring is about fetching values from a single array or an object and assigning it to multiple variables. Let us understand this with the help of an example: */
/* let fruits = ['🍏', '🍉', '🍐'];
// let [fruit1, fruit2, fruit3] = fruits;
let [fruit1, , fruit2] = fruits;

ResultContainer.innerHTML = fruit2; */

/* let fruits = ['🍏', '🍉', '🍐', '🥑'];
let [fruit1, ...OtherFruits] = fruits;
ResultContainer.innerHTML = OtherFruits; */

/* let Fruits = { Fruit1: '🍏', Fruit2: '🍉' };
let { Fruit1, Fruit2 } = Fruits;
ResultContainer.innerHTML = Fruit1; */

/* function sum(a, b, c) {
    return a + b + c;
}
let input = [5, 9, 6];
ResultContainer.innerHTML = sum(...input);
 */

// TODO: for Loop
/* The for loop takes in three parameters: the first parameter is for the initialization of
the control variable, the second one is the condition that provides entry to the loop if true, and the last one is increment or decrement parameter that will modify the value of control variable in each loop. These three parameters are followed by the body of the loop: */
/* for (let i = 0; i < 8; i++) {
    if (i == 1) {
        continue;
    }
    console.log('i: ' + i);
    if (i == 4) {
        break;
    }
} */

//! We can use break and continue operators with all kinds of JavaScript loops. The continue operator is used to skip the remaining statements from the body of the loop and skip to the next iteration, whereas the break operator is used to terminate all the remaining iterations of the loop.

/* Notice the preceding piece of code and its output in Figure 1-6. The loop is conditioned to run for eight iterations and print the number of iteration in each execution. However, for the second iteration, the if condition before the print statement in the body of the loop will evaluate to true and the execution of continue operator
will make the loop jump to the next iteration. Hence, we do not see the value “1” in
the output. Similarly, for the fifth iteration, the if condition after the print statement
will evaluate to true and the execution of break operator will terminate the remaining iterations of the loop. Thus, we do not see remaining values after “4” printed in the output. */

// TODO: forEach Loop
/* forEach loop is called on an array or a list and executes a function for each array element. The function takes in three parameters: the current value (fruit), the index of the current value (index), and the array object that the current value belongs to. The second and third parameters are optional, whereas the first parameter is mandatory. One of the major benefits of using this control loop is that the function would not be executed for empty array elements, which results in better response time for the end application: */
/* let fruits = ['🍏', '🍐', '🍉'];
fruits.forEach((fruit, index) => {
    console.log(index + ': ' + fruit);
}); */

// TODO: while Loop
/* while loop is an entry-controlled loop similar to for loop, which means that the condition that validates the entry to the loop is checked during the beginning of the iteration. However, unlike for loop, you don’t have to initialize or modify the control variable along with the condition. The initialization is done before the beginning of the loop and its value is modified in the loop body:
 */

/* let fruits = ['🍏', '🍐', '🍉'];
let i = 0;
while (i < fruits.length) {
    console.log(i + ': ' + fruits[i]);
    i++;
} */

// TODO: do...while Loop
/* 
do...while loop is a variation of the while loop which is exit-controlled, which means that the condition that validates the entry to the loop is checked after the completion of an iteration. If true, the loop will execute the next iteration:
 */

/* let fruits = ['🍏', '🍐', '🍉'];
let i = 0;
do {
    console.log(i + ': ' + fruits[i]);
    i++;
} while (i < fruits.length); */

//* The output: 0:🍏 1:🍐 2:🍉 - forEach, while, and do...while Loop in JavaScript. There are some more variations of the forEach loop such as for...in and for...of.

// TODO: Type Conversion
/* Often during programming, we need to explicitly convert member of one data type to another. This can be done by using JavaScript’s built-in methods for type conversion. Consider the following example for type conversion in JavaScript: */
/* let input = [5, 9, 6];
console.log('Type Of [5,9,6]: ' + typeof input);
console.log('Type Of [5,9,6]: ' + typeof input.toString());
console.log("Type Of '2': " + typeof Number('2'));
console.log("'true' to Number: " + Number(true));
console.log("'hi' to Boolean: " + Boolean('hi'));
console.log("'NaN' to Number: " + Boolean(NaN));
 */

// TODO: Functions

/* function fun() {
    console.log('Regular JS Function');
}

let functionExpr = function () {
    console.log('Function Expression');
};

let arrFunction = () => {
    console.log('Arrow Function');
};
fun();
functionExpr();
arrFunction(); */

// TODO: Closures

/* Closure is an inner function having access to the scope of parent function even after the parent function has been executed. Let us understand the need of closures. Suppose that you have a counter in your program. You can use a global variable and a function to increase the value of the counter. However, the problem in this scenario is that any part of your code can modify the value of the global variable without accessing the function. To tackle this, we will need a variable that is local to the function. But if you try doing that, the variable will be initialized every time the function gets called and it will not fulfill our purpose. This is where closure comes in to the picture. Consider the following example for a better understanding: */

/* var increment = (function () {
    var counter = 0;

    return function () {
        counter += 1;
        console.log(counter);
    };
})();
increment();
increment();
increment(); */

/* When we assign the value of the function to the “increment” variable, the function is executed once and the entire body of the inner function is assigned to the variable because that is what the function returns. Now, when you call the function using the variable name, just the inner function will be executed. This way, the variable will remain private to the function and will be initialized just once during the assignment of function to the variable, thus fulfilling our purpose of having a private counter variable which can only be modified by invoking a designated function. */

// TODO: Arrays

/* 
Arrays are JavaScript objects that store multiple values in single variable. You can either access a single value by specifying its index in the array or can easily iterate through all the values to find a specific value. The following is the syntax for defining an array:
*/
/* var fruits = ['🍉', '🍐'];
fruits[2] = {
    Apple1: '🍎',
    Apple2: '🍏',
};
console.log(fruits); */

/* 

arr.sort() – This method sorts the array.

arr.forEach() – This method is used to iterate over all the array
elements.

arr.push(value) – This method is used to add new element to the array at the last index.

arr.pop() – This method removes the last value from the array. arr.shift() – This method removes the first value from the array and shifts the remaining values by one index.

arr.unshift(value) – This method adds a new element to the array at the first index and shifts the remaining values by one index.

Array.isArray(arr) – This method returns true if “arr” is an array. arr.toString() – This method converts an array to string of values.

arr.join(separator) – This method is similar to the toString method, but you can specify a separator for the values.

arr1.concat(arr2) – This method is used to concatenate two arrays: arr1 and arr2.

arr.splice(position, deletecount, value1, value2,...) – This method is used to add new set of values to an array at specific position. The first parameter specifies to position at which the values need to be added, the second parameter is the count of elements to be deleted from the array, and the remaining parameters are the values that need to be added to the array.

arr2 = arr1.slice(firstindex, lastindex) – This method is used to create a new array from an existing array. The parameters specify the start and end index for the values that need to be fetched for the new array. If you do not specify the lastindex, JavaScript will take all the remaining values.

*/

//* Consider the following code that will help you understand the properties and methods of JavaScript arrays:

/* //? toString()
var fruits = ['🍉', '🍏', '🍐'];
console.log('Array: ' + fruits.toString());

//? forEach()
console.log('forEach');
fruits.forEach((el) => {
    console.log(el);
});

//? push()
fruits.push('🍓');
console.log('Push: ' + fruits.toString());

//? pop()
fruits.pop();
console.log('Pop: ' + fruits.toString());

//? shift()
fruits.pop();
console.log('Shift: ' + fruits.toString());

//? unshift()
fruits.unshift('🍏');
console.log('Unshift: ' + fruits.toString());

//? Array.isArray()
console.log('isArray? ' + Array.isArray(fruits));

//? concat()
var moreFruits = ['🍓'];
fruits = fruits.concat(moreFruits);
console.log('Concatenate: ' + fruits.toString());

//? splice()
fruits.splice(0, 0, '🥑');
console.log('Splice: ' + fruits.toString());

//? slice()
var top3fruits = fruits.slice(0, 3);
console.log('Slice: ' + top3fruits.toString()); */

// TODO: Classes and Modules

/* class Dog {
    constructor(id) {
        this.id = id;
    }
}
let dog = new Dog(100);
console.log(dog.id);
dog.id = 200;
console.log(dog.id); */

/* On executing the preceding piece of code, you will get “100” and “200” as output in your browser console. We can also add method to our class to perform operations. Let us add a method that returns the value of the “id” property. Consider the following example: */

/* class Dog {
    constructor(id) {
        this.id = id;
    }
}
let dog = new Dog(100);
console.log(dog.getId()); */

/* The preceding piece of code should print “100” to your browser console. Note that we do not need a “function” keyword while defining a method in JavaScript. We can simply use method name and go ahead with method definition. Let us now look at inheritance in JavaScript. Consider the following example: */

/* class Animal {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
}

class Dog extends Animal {
    constructor() {
        super('dog');
    }
}
let dog = new Dog();
console.log(dog.getType()); */

/* We use “extends” keyword to inherit the properties and methods of the base class in the child class. We can use “super” keyword to access members of the base class inside the child class. Outside the class, we can access members of both base class and child class using the object of the child class. The preceding piece of code should give you “dog” as output in the browser console. When we create an object of “Dog” class, its constructor gets invoked which, in turn, invokes the constructor of “Animal” class and sets the “type” property value to “dog”. Then, when we try to invoke method “getType()”, it searches both parent and child class for this method and invokes it if found. Note that if you do not define any constructor in the child class, the parent constructor gets invoked automatically, but if you define a constructor in the child class, you need to call the parent class constructor manually by using the “super” keyword. */

//! Uncaught SyntaxError: Cannot use import statement outside a module
// import { Animal } from './modules/Animals';

// let dog = new Animal('dog');
// console.log(dog.getType());

// TODO: DOM
// Let us now fetch these elements using the document object methods. Consider the following JavaScript code:

/* var header = document.getElementsByTagName('h1');
header[0].textContent = 'Header Text from JS';
header[0].setAttribute('isHeader', 'True');
header[0].style.border = '2px solid black';
console.log(header[0]);
// var body = document.getElementById('ResultContainer');
// var footer = document.getElementsByClassName('Footer');

console.log(header);
// console.log(body);
// console.log(footer);
 */

// TODO: Error Handling
/* try {
    var fruit = new Fruit();
} catch (e) {
    console.log('ERROR: ' + e.message);
}
console.log('rest of the code!'); */
// Notice that despite of the error, the program does not terminate and the rest of the code gets executed as usual after error handling.

//* throw error
/* try {
    throw new Error('Custom Developer Error!');
} catch (e) {
    console.log('ERROR: ' + e.message);
} */

// TODO: HTTP Requests

/* let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        console.log(request.response);
    }
};

request.open('GET', 'https://api.github.com/users/msthakkar121');

request.send(); */

//? JQuery
//! Again import module problem. GET http://localhost:3000/node_modules/jquery/dist/jquery net::ERR_ABORTED 404 (Not Found)
/* import '../node_modules/jquery/dist/jquery';

$.get('https://api.github.com/users/msthakkar121', (data) => console.log(data));

let promise = $.get('https://api.github.com/users/msthakkar100');

promise.then(
    (data) => console.log(data),
    (error) => console.log(error)
); */

// TODO: Promises

// Promises are designed to work with asynchronous requests. They are objects that store the response of asynchronous requests. Consider the following piece of code:
/* let promise = new Promise(function (resolve, reject) {
    // setTimeout(resolve, 100, 'Resolved');
    setTimeout(reject, 100, 'Rejected');
});

promise.then(
    (value) => console.log('Success: ' + value),
    (error) => console.log('Error: ' + error)
); */
