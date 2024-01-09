//*****************  for-of loop */

//? syntax;;

//for(let var of stringvar){
    //code
//}

// let str="aman saini";
// for(let x of str){
//     console.log("x=",x) 
// }



// for(let x=1; x<=10; x++ ){
//     let mult=6;
//     mult=mult*x;
//     console.log( mult)
//  }





//************ 21/12/23 */






//! Practice Questions

//* Create a function called printMultiplicationTable that takes a number as a parameter
//and prints the multiplication table for that number up to 10.


// mult(1,2);
// mult(2,2);
// mult(3,2);
// mult(4,2);
// mult(5,2);
// mult(6,2);
// mult(7,2);
// mult(8,2);
// mult(9,2);
// mult(10,2);



//* Write a function called checkNumber that takes a number as a parameter and prints 
//"Even" if the number is even and "Odd" if it's odd.


// function Number(a){
//           if(a%2==0){
//             console.log("number is even")
//           }else{
//             console.log("number is odd")
//           }
// }


// Number(4)               //number is even
// Number(7)              // number is odd




//* Write a function called checkPassword that takes a password as a parameter and prints
// "Valid" if the password is at least 8 characters long and "Invalid" otherwise.

// function password(s){
//     if(s>=8){
//         console.log("password is valid")
//     }else{
//         console.log("password is invalid")
//     }
// }



// password(7);




// Question 1:
//? Write a function called greet that takes a name as a parameter and returns a greeting message. 
//? For example, if the name is "John," the function should return "Hello, John!"
// function greet(name){ 
    
//      console.log("hello, "+name + "!")
// }
// greet("aman")





// Question 2:
//? Create a function called add that takes two numbers as parameters and returns their sum.
// function add(x,y){
//     console.log(x+y)
// }

// add(3,5)




// Question 3:
// ?Write a function named isEven that takes an integer as a parameter and returns true if it's even and false otherwise.

// function isEven(integer){
//     if(integer%2==0){
//         console.log(true)
//     }else{console.log(false)
//     }
// }

// isEven(4)







// Question 4:
//? Implement a function called reverseString that takes a string as a parameter and returns the reversed version of the string.
//? For instance, if the input is "hello," the function should return "olleh."









// Question 5:
//? Create a function named getMax that takes an  as a parameter and returns the maximum value in the array




 //?????????????????????????????????????????????? practice          *********************************************??????????????????????/

// function count(x,y){
//     return x*y;
// }

// let number= count(1,19)
// number=number/19
// console.log("number"+"="+number)               //? number=1;



//!/???????????????????? factorial

// function factorial(){
//     let x=1;
// for( let num=5; num>=1; num--){
//     x=x*num
//     console.log(x);
//     }
// }
// factorial()


//!  /////*********     calculater                                   **************/!


// let operator="**";
// let x=2;
// let y=100;



// if(operator=="+"){
//   console.log(x+y);
// }else if(operator=="-"){
//   console.log(x-y);
// }else if(operator=="*"){
//   console.log(x*y);
// }else if(operator=="/"){
//   console.log(x/y);
// }else if(operator=="%"){
//    console.log(x%y)
// }else if (operator =="**"){
//   console.log(x**y)
// }else{
//   console.log("invalid operator")
// }




//! :::::::::::::: Practice Test :::::::::::::::::::::

//* 1. Numbers: 👻
//? Explain the difference between == and === when comparing numbers.
// // What is the purpose of the isNaN() function, and how can it be used with numbers?
//     impliciti(==)   :  device is check a values 

// let num1="9";
// let num2=9;

// console.log(num1==num2)

// explicitie;
//     device is check values and check data types

// example 1=
// let num1="22";
// let num2=22;

// console.log(num1===num2)            // false

// example 2=

// let num1="22";
// let num2="22";

// console.log(num1===num2)                  //true




//* 2. Strings: 👻
//? How do you concatenate two strings in JavaScript?




// let firstname="aman";         // first two decleared string
// let lastname="saini";

// console.log(firstname + lastname)      // after both string add
  









//? How can you find the length of a string in JavaScript?
//? Explain the difference between single (') and double (") quotes for defining strings.

   
















//* 3. Booleans: 👻
//? What are the possible boolean values in JavaScript?


// boolean two possible values 

//   1=true
//   2=false
  
// example

// let x=truth;


//? Explain the concept of truthy and falsy values in boolean contexts.
//  five values of   falsy 
// 1=null;         // 2=undefined;       //   3=false;        // 4=Nan;   //   5=null ("")

//  example  == let y=null





//? How do you negate a boolean value in JavaScript?










//* 4. Undefined and Null: 👻
//? Differentiate between undefined and null in JavaScript.
undefined;
// declared  a variable but assing not  value
//example=
// let a;
// console.log(a)


// null;
//  can be used only one value use that is null

//example=
// let number=null;
//   console.log(number)





//? What does it mean if a variable is declared but not assigned a value?


//it means undefined data types

// let number;
// console.log(number)


//? How can you explicitly set a variable to null?


// let number4=null;






//* 5. BigInt: 👻
//? When might you use BigInt instead of regular numbers in JavaScript?

// 2**53-1






//? How do you create a BigInt literal in JavaScript?
 


// let number=2323333333333333333n



// let number2=BigInt("222222222222222222222222222")

// console.log(typeof number2)

//? Can you perform arithmetic operations between regular numbers and BigInt?
 //       no use arithmetic operations between regular numbers and BigInt  

//       because, it is explicitie 





// let number1=22222222;
// let number2=222222222222222233333n


// console.log(number1+number2)







 

//* 6. Functions: 👻
//? What is a function declaration, and how does it differ from a function expression?

// function name(){                               // function declartion
  // code to be excuted
// }

// let xx=name()                         // functon expression

// console.log(xx)





// (
// 15%Number)



//// Explain the concept of hoisting in relation to function declarations.




//! mixup 😎☆🪽👽
//? How can you use the typeof operator to check the data type of a variable?



// let number="vhdmc";


// console.log(typeof number)





//* Write an if statement to check if a variable temperature is greater than 30. 
//* If true, log "It's a hot day!" to the console; otherwise, log "The weather is pleasant."


// let temperature=31;



// if(temperature>30){
//     console.log("It's a hot day!")
// }else{
//     console.log("The weather is pleasant.")
// }










//? Create a function printMultiples that takes a number as an argument and logs the first five multiples of that number.

// function printMultiples(number){
//            for(x=1; x<=5; x++){
//                console.log(x*number)
//        }
// }

// printMultiples(5)









//* Certainly! Here's a simple JavaScript program that calculates and prints the sum of all multiples of 3 and 5 below 1000:

// let i=0;
// let x=0;
// for(num=3; num<1000;num+=3){
//     i=i+num
// }
// for(num1=5; num1<1000; num1+=5){
//     x=x+num1
// }
// console.log(x+i)                             // ?  267333









 //? Write a program that calculates and prints the sum of all even numbers and the sum of all odd numbers from 1 to 50.
// let i=0;
// for(let even=2;  even<=50; even+=2){
//     i=i+even;
    
// }

// // console.log(i)               // 650

// let x=0;

// for(let odd=1; odd<=50; odd+=2){
//     x=x+odd
    
// }

// // console.log(x)              //625

// console.log(i+x)             //1275













// * Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number,
// and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."


// for(i=1; i<=100; i++){
//     if(i%3==0 && i%5==0){
//       console.log("FizzBuzz.")
//     }else if(i%3==0){
//       console.log("fizz")
//     }else if(i%5==0){
//       console.log("buzz")
//     }else{
//         console.log(i)
//     }
    
// }
    






//?Basic Function Declaration:
//Write a JavaScript function named greet that takes a parameter name and returns a greeting message. Call the function with your name and log the result.



// function greet(name){
//    for(let i=1; i<=10; i++){
//     console.log(i + "=" + "sachin")
//    }
    
// }


// greet("sachin")

//?Function Expression:
//Declare a variable multiply and assign it a function expression that multiplies two numbers. Call the function with two numbers of your choice and log the result.




// function number(x,y){
//   return x*y
// }

// let multiply=number(5,6)
// console.log(multiply)


//?Default Parameters:                  //check karne
//Create a function called power that takes two parameters, base and exponent, and calculates the power.
// Set the default value of exponent to 2. Call the function with a base value and log the result.

// function power(base,exponent){
//    console.log(base**exponent)
// }
// power(3)



//?Rest Parameters:
//Write a function called sum that takes any number of arguments and returns their sum. Use the rest parameter syntax.
// Call the function with different numbers of arguments and log the result.

// function sum(x,y){

//   return x+y
// }
// var add = sum(4,5)
// console.log(add)


                                      // question repet 











//?Function Basics:
//Write a simple JavaScript function called greet that takes a name as an argument and returns a greeting.
// For example, calling greet('Alice') should return 'Hello, Alice!'.

// function  greet(aman){
//   console.log('Hello, aman!')
// }
// greet('aman')


//?Function Parameters:
//Create a function named calculateArea that takes the radius of a circle as a parameter and returns the area of the circle.
// Use the formula: area = π * radius^2. You can use the value of π as 3.14.

// function calculateArea(circle){
//   let π=3.14;
//   let radius=10;
//     console.log(area =  π  * radius^2)
// }

// calculateArea()



//?Function Scope:
//Explain the concept of scope in JavaScript functions.
// Write a small code snippet that demonstrates local and global scope within a function.


//?Callback Function:
//Create a function called processNumbers that takes two numbers and a callback function as parameters.
// The callback function should perform a specific operation on the two numbers (e.g., add, subtract, multiply).
// Demonstrate using this function with different callback functions.

// function processNumbers(){
//       let operator= "+";
//       let x=3;
//       let y=4;
     
// if(operator=="+"){
//   console.log(x+y);
// }else if(operator=="-"){
//   console.log(x-y);
// }else if(operator=="*"){
//   console.log(x*y);
// }else if(operator=="/"){
//   console.log(x/y);
// }else if(operator=="%"){
//    console.log(x%y)
// }else{
//   console.log("invalid sing")
// }

// }

// processNumbers()




  //  function processNumbers(){
  //    let operator="/"
  //    let x=3;
  //    let y=5;

  //    switch(operator){
  //     case "+":
  //       console.log(x+y)
  //       break;
  //     case "-":
  //       console.log(x-y)
  //       break;
  //     case "*":
  //       console.log(x*y)
  //       break;
  //     case "/":
  //       console.log(x/y)
  //       break;
  //     case "%":
  //       console.log(x%y)
  //       break;
  //     default:
  //       console.log("invalid operator")
  //    }
  //  }
  
  //  processNumbers()


  // Create a game where you start with any random game number. Ask the user to keep
  //guessing the game number until the user enters correct value.


// let randomnumber=10;
//   if(randomnumber==10){
//     console.log("number is correct")
//   } else if(randomnumber<10){
//     console.log("number is small")
//   }else if(randomnumber>10){
//     console.log("number is large")
//   }
    













//?Array Basics:

//How to declare and initialize an array.
//Accessing elements in an array using indices.
//The length property of an array.
//?Array Methods:

//Methods like push, pop, shift, and unshift for modifying arrays.
//Iterating over arrays using forEach, map, filter, and reduce.
//The splice method for modifying elements in an array.
//?Multidimensional Arrays:

//Creating and working with arrays of arrays.
//Common Array Patterns:

//Filtering arrays based on a condition.
//Checking if an element exists in an array.
//Finding the index of an element in an array.







//! Practice Questions
//? Create an array numbers with elements 1, 2, and 3. Add the element 4 to the end of the array and remove the first element.
//? . Starting with the array [5, 10, 15, 20], remove the last element and add the number 25 to the beginning.

//? Given an array of numbers [8, 6, 11, 5, 2, 9], use the find method to find the first number greater than 7.
//? Using the same array, find the index of the number 5 using the findIndex method. 

//? Create an array fruits with elements 'apple', 'banana', 'orange', 'grape'. Check if 'orange' is included in the array.
//? Using the same array, use the includes method to check if 'pear' is in the array.

//? Given an array of numbers [3, 7, 12, 8, 21, 5], use the filter method to create a new array with only the even numbers.

//? Create a function filterWords that takes an array of strings and returns a new array containing only strings with a length greater than 5. Test it with ['apple', 'banana', 'kiwi', 'grape'].


// let numbers =["3", "7", "12"," 8", "21", "5"]

// console.log(numbers.slice(1,5))

// console.log(numbers.splice(1,1,4,5,`6*2=`))
// let NUM=numbers.toString()
// console.log(NUM)


  




// let name="sachins22"
// console.log(name.length)


// console.log(name.replace('s','ss'))

// string.substr(,length) 

//? Both are equal in the value and data type. =>IMPLICITIY







// function height()  
// {     
// var  height=123.56;  
// var type =(height>=190)?"Taller":"Little short";  
// return type;  
// }  
// console.log(height())



// function outputfun(object)  
// {  
//     var place=object ?object.place: "Italy";  
//     return "clean:"+ place;  
// }  
// console.log(outputfun({place:India}));  

// console.log(("one"<8))


// var string1 = "Letsfindout";  
//  var intvalue = 40; 
//  console.log( string1 + intvalue );  





// function displayArray(x)  
// {  
// var len=x.length,i=0;  
// if(len==0)  
// console.log("Empty Array");  
// else  
// {  
// do  
// {  
//              console.log(x[i]);  
// } while (++i<len);  
// }  
// }  

// console.log(displayArray(2) )
// let a=[1,2,3,4,5,6,]
// for (var i = 0;i<a.length;i++)  
// console.log(a[i]);  







 




















