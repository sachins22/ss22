//!  Date :     
//* Day : 1 



//!                        JAVASCRIPT
//?  It is used to make website or apps more useful / Dynamic

//? First we need install a code editor where we writes our code
//? like : Vs Studio
//? and install node

//* create a folder (Sachin)
//? Open our vs code
//? then we create a file on sachin folder (script.js)

//***************************************************************************** */


//!                         Variables 
//? Var 
//? let
//? const

//* Rules :
//? 1. starting letter must be (a-z) (A-Z), (_) and ($)
//? 2. after the letters we can use numbers (0-9) : like -> friend1
//? 3. JavaScript is case-sensitive (a is not equal to A)






//! Date : 4/12/2023
//? Day 2,3
//***************************************************************************** */



//!                               DATA TYPES
//*           Primitive                                Non-Primitive
//?            1. String                                   1. Function
//?            2. Number                                   2. Array
//?            3. Undefined                                3. Object
//?            4. Null
//?            5. Boolean
//?            6. Bigint
//?            7. Syntax



//!  1. String 
//*************************** */

//? if we put anything between these three ("", '', ``) 
//? that's called string
// like:

// var friend1 = "Aman";
// var friend2 = "Sachin";
// var friend3 = "Navii";

// console.log(friend1)
// console.log(typeof friend1)


//!  2. Number  
//*************************** */

//? Represents numeric values.
//? Example: 
// let age = 25;


//!  3. Boolean 
//*************************** */

//? Represents a logical value indicating true or false.

// Example: let isStudent = true;



//!  4. Undefined 
//*************************** */

//? Represents a variable that has been declared but not assigned a value.

// Example: 
// let x; (The value of x is undefined)



//!  5. Null
//*************************** */

//? Represents the absence of a value.

// Example: 
// let y = null;


//!  6. Bigint
//*************************** */

//? BigInt variables are used to store big integer values that are too big to be represented by a normal  Number.

// let num = 9007199254740991
// console.log(num)
// console.log(typeof num)

// let num1 = 90071992547409911254654634n
// console.log(num1)
// console.log(typeof num1)

// let num2 = BigInt("90071992547409911254654634")
// console.log(num2)
// console.log(typeof num2)




//! >>>>>>>>>>>>>>>>>      Non - Primitive





//! 1. Function
//********************************* */

//? JavaScript functions are used to perform operations. 
//? We can call JavaScript function many times to reuse the code.


// function functionName() {}
// console.log(typeof functionName)


// //! 2. Array
// //********************************* */

// let sachin = [];
// console.log(typeof sachin);



//! 3. Object 
//********************************* */

// var sachine = {}
// console.log(typeof sachine)











//! Date : 5/12/2023
//? Day 4
//******************************************************************** */


// let num;
// let sq = 5
// var str = shinchan
// let nu = ''
// const str = 6541654n






//!>>>>>>>>>>>>             EXPRESSIONS AND OPERATORS           <<<<<<<<<<<<<<<<<<<<!//

//*                 5+20             5 is operands
//*                                  + is operator 
//*                                  and combination of both called Expression

//?                   1. Assignment operator   ✅ 
//?                   2. Arithmetic operator   ✅ 
//?                   3. Comparison operator   ✅ 
//?                   4. Logical operator      ✅ 
//?                   5. String operator       ✅ 
//?                   6. Conditional (ternary) operator 




//*::::::::::::::         1. Assignment operator            ::::::::::::::::://

//?   An Assignment operator assign a value to its left operand based on the value of its right operand.
//?   the simple assignment operator is equal (=)

// ?>>>>>      a)    = : Assign a value to a variable
// ?>>>>>      b)    +=: Add and assign
// ?>>>>>      c)    -=: Subtract and assign
// ?>>>>>      d)    *=: Multiply and assign
// ?>>>>>      e)    /=: Divide and assign


// let num = 2;
// num+=1;
// num-=1;
// num*=2;
// num/=2;
// console.log(num)




//*::::::::::::::         2. Arithmetic operator            ::::::::::::::::://


//?          An Arithmetic operator takes numerical values
//?          (either literal or variable) as their operand stand
//?          return a single numerical value.


// let myMoney = 20;
// let yourMoney = 10;


// console.log(myMoney + yourMoney)        //? Addition
// console.log(myMoney - yourMoney)        //? Subtract
// console.log(myMoney * yourMoney)        //? multiply
// console.log(myMoney / yourMoney)        //? divide
// console.log(myMoney % yourMoney)        //? Module








//! syntax Sugar
//? Increment Operator
// i++       //* Post increment
// let myMoney = 20;
// // // myMoney++;
// console.log(myMoney++)
// // ++i       //* pre increment
// myMoney = 20;
// // // ++myMoney;
// console.log(++myMoney);

// // //? Decrement operators 
// // i--       //* Post decrement
// myMoney = 20;
// // myMoney--;
// console.log(myMoney--);

// // --i       //* Pre decrement
// // --myMoney;
// console.log(--myMoney);












//! Date : 6/12/2023
//? Day 5
//******************************************************************** */




//*::::::::::::::::        3. Comparison (Relational) operators       :::::::::::::::::::::*//

//? A comparison operator compare its operands and 
//? return a logical value based on whether the comparison is true.

//? it always return values in boolean




// let gian = 90;
// let nobita = 10;


// console.log(gian > nobita)                      //? Greater then
// console.log(gian >= nobita)                     //? Greater then equal to
// console.log(gian < nobita)                      //? less then
// console.log(gian <= nobita)                     //? less then qual to
// console.log(gian == nobita)                     //? equal to
// console.log(gian != nobita)                     //? not equal to





//*::::::::::::::::        4. Logical operators       :::::::::::::::::::::*//

//? it also returns vale in boolean 

//* logical And (&&)

// let light = false;
// let garmiHoRhiHai = false;
// // console.log(light==true && garmiHoRhiHai==true)

// //* logical or (||)
// // console.log(light==true || garmiHoRhiHai==true)

// //* logical not (!)
// console.log(!garmiHoRhiHai==true)





//*::::::::::::::::         5. String operator       :::::::::::::::::::::*//

//? string concatenation 

// let char = "blue"
// console.log('Bhupender' + 'jogi')
// console.log('This color is : ' + char)








//! Date : 7/12/2023
//? Day 6
//************************************************************* */

//*>>>> Datatypes Practice

// 10 + "20"
// console.log(10 + "20")
// console.log(10 + "sach")
// console.log(10 - "20")
// console.log(10 - "sach")                // bug is here 
// 9 - "5"
// console.log(9 - "sachin");                      //? ======================    bug here 
// "Java" + "Script"
// " " + " "
// " " + 0
// console.log(" " + 0)
// "Sachin" - "palawan"
// console.log("Sachin" - "pehalwan");        //// =========== NaN means Not a Number 
// true + true  
// console.log(false - true)
// true + false 
// false + true
// false - true 
// console.log(false - true);

//! 😳  Challenge Time
//? What will be the output of 7**3? 
//? What will be the output, when we add a number and a string?





//! Date : 8/12/2023
//? Day 7
//************************************************************* */


//* Declare a variable isRaining and assign it a boolean value representing whether it's currently raining.
//* If it's raining, print "Remember to take an umbrella!" otherwise print "Enjoy the weather!"

// Null and Undefined:
// Declare a variable nullVar and set it to null.
// Declare a variable undefinedVar without assigning any value.
// Check if nullVar is equal to undefinedVar and print the result.
















//!>>>>>>>>>>>>>             CONTROL STATEMENT AND LOOPS           <<<<<<<<<<<<<<<<<<<<!//

//*                           if..Else                      ✅                  
//*                           Switch Statement              ✅     
//*                           While Loop                    ✅       
//*                           Do-While Loop                 ✅         
//*                           For Loop                      ✅          
//*                           For in Loop       
//*                           For of Loop       
//*                           conditional (ternary) operator  ✅  



//*::::::::::::::::          1. If...Else          :::::::::::::::::::::*//

//? The if statement executes a statement if a specified condition is truthy. 
//? If the condition is falsy, another statement can be executed.


// var light = "green";

// if (light=="red"){
//         console.log("stop")
// }else{
//         console.log("ready to run")
// }





//! Date : 12/12/2023
//? Day 9
//************************************************************* */
// Write an if-else statement to check if a number is positive, negative, or zero.
// Log the result to the console.
// Create a program that checks if a given number is even or odd.
// Log the result to the console.
// Write an if-else statement to determine if a person is eligible to vote (age >= 18).
// Log the eligibility status to the console.
// Create a program that checks whether a user-entered password is strong or weak.
// Log the result to the console.
// Implement a grading system where an if-else statement checks a student's score and assigns a grade (A, B, C, D, or F).
// Log the grade to the console.
// Write an if-else statement to determine if a year is a leap year or not.
// Log the result to the console.
// Create a program that compares two numbers and logs the larger one to the console using an if-else statement.


// let light = "green";
// if(light == "red" ){
//         console.log("STOP");
// }else if(light == "yellow"){
//         console.log("Ready to run")
// }else if(light == "green"){
//         console.log("run")
// }else {
//         console.log("Enter the valid value")
// }




//! Date : 13/12/2023
//? Day 10
//************************************************************* */


//*  What is truthy and falsy values in Javascript?

//? we have total 5 falsy values in javascript
//? 👉 0,"", undefined, null, NaN, false** is false anyway
//! in these 5 values if condition didn't work; 
//! and the cursor will go to else part directly



// let score = 400;
// debugger
// if (score == NaN) {
//         console.log("We won the match")}
// // } else if (score == 400) {
// //         console.log("tied ")
// // } 
// else 
// {
//         console.log("we loss the match")
// }



//*::::::::::::::::          2. Conditional (ternary) operator          :::::::::::::::::::::*//

// let score = 400;

// if (score == 400) {
//         console.log("We won the match")
// }
// else 
// {
//         console.log("we loss the match")
// }


//? The Conditional (ternary) operator is the only JavaScript operator
//? that takes three operands.
//! syntax  >>
// *  VariableName = (condition)? value1:value2

//?>>>>>>>>>>>>>>>         by using ternary operator         <<<<<<<<<<<<<<<<<//

// let score = 400;
// (score == 400)? console.log("We won the match"):console.log("we loss the match")



//? Write a ternary operator to check if the temperature is greater than 30 degrees Celsius. If true, assign the value "Hot"; otherwise, assign "Mild".
//* Given two variables num1 and num2, use a ternary operator to find and assign the larger number to a variable called largerNumber.
//? Create a ternary operator to determine if a given number is positive, negative, or zero. Assign the result to a variable called result.
//* Given a variable char containing a single character, use a ternary operator to check if the character is a vowel. Assign "Vowel" if true, and "Consonant" if false.
//? Write a ternary operator to assign the role "Admin" to a user if the variable isAdmin is true; otherwise, assign the role "Guest".
//* Use a ternary operator to determine if a given number is even or odd. Assign the result to a variable called evenOrOdd.























//! Date : 14/12/2023
//? Day 11

//*::::::::::::::::          3. switch Statement          :::::::::::::::::::::*//

// let day = 9;

// if (day == 0) {
//     console.log("sunday")
// } else if (day == 1) {
//     console.log("monday")
// } else if (day == 2) {
//     console.log("tuesday")
// } else if (day == 3) {
//     console.log("wednesday")
// }
// else if (day == 4) {
//     console.log("thursday")
// }
// else if (day == 5) {
//     console.log("friday")
// }
// else if (day == 6) {
//     console.log("saturday")
// } else { console.log("enter value 0-6") }



//* The JavaScript switch statement is used to execute one code from multiple expressions.

// let day = 1;

// switch(day){
//     case 0:
//         console.log("sunday")
//     case 1:
//         console.log("monday")
//     case 2:
//         console.log("tuesday")        
//     case 3:
//         console.log("wednesday")        
//     case 4:
//         console.log("thursday")        
//     case 5:
//         console.log("friday")        
//     case 6:
//         console.log("saturday")        
//     default:
//         console.log("Enter value 0-6")        
//     }


//*  🙌 Break statement
//* Terminates the current loop, switch, or label
//* statement and transfers
//* program control to the statement following the terminated statement. 

// let day = 1;

// switch(day){
//     case 0:
//         console.log("sunday")
//         break;
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday") 
//         break;       
//     case 3:
//         console.log("wednesday")
//         break;        
//     case 4:
//         console.log("thursday")
//         break;        
//     case 5:
//         console.log("friday")
//         break;        
//     case 6:
//         console.log("saturday")
//         break;        
//     default:
//         console.log("Enter value 0-6")        
//     }










// if (num<=5){
//     console.log("less than 5")
// }else if (num<=10){
//     console.log("less than 10")
// }else{
//     console.log("greater than 10")
// }



// let num = 6;
// switch(num){
//     case 5>=10:
//         console.log("both")
//         break;
//     // case :
//     //     console.log("less than 10")
//     //     break;
//     default:    
//     console.log("enter value 1-10")
// }








//! Date : 15/12/2023
//? Day 12

//*::::::::::::::::              4. While Loop statement               :::::::::::::::::::::*//

//? The while statement creates a loop that executes a specified statement 
//? as long as the test condition evaluates to true. 
//! syntax
// while(statement){
// code to execute
// }

// let sachin = 100;
// let i = 0;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// let number = 5;
// debugger
// while(number >=0){
//     console.log(number);
//     number-=1;
// }









//*::::::::::::::::              5. Do-While Loop statement               :::::::::::::::::::::*//

//? A do-while loop is similar to a while loop, but it always executes the block of code at least once, even if the condition is initially false. 
//! Syntax
// do{
// // code
// }while(true);



// let number = 1;
// let sum = 0;
// while(number <=10){
//     sum = sum + number;
//     number+=1;
// }
// console.log(sum);




// do{
//     console.log("Enter value from 1 to 10", number);
//     number+=1;
// }while(number <=10)




//! Date : 19/12/2023
//? Day 13

//! -------- Test ----------------- Test ----------------- Test --------
// Write a simple while loop that prints numbers from 1 to 10.
// Create a while loop that prints even numbers from 2 to 20.
// Write a while loop to calculate the sum of numbers from 1 to 100.
// Implement a while loop to find the factorial of a given number.

// Write a do-while loop that prints numbers from 1 to 5
// Implement a do-while loop to repeatedly prompt the user for a password until they enter the correct one.
// Create a do-while loop that displays a menu to the user with options, and continues until the user chooses to exit.










//! Date : 20/12/2023
//? Day 14
//* ----------------------

//*::::::::::::::::              6. For Loop statement               :::::::::::::::::::::*//

//? it is shortest way of while and do while loop

// let num = 2;

// do{
//         console.log(num);
//         num++;
// }
// while(num<=10)

// for(let a=1; a<=10; a++){
//     let mult = 5
//     console.log(mult + " * " + a + " = " + mult*a)
// }




//! Syntax :
// for (initialization; condition; increment)  
// {  
//     code to be executed  
// }  


// for(let num=2; num<=10; num++){
//         console.log(num);
// }


//* Print the table of 7 

// for( let num=1; num<=10; num++){
//         let tableOf = 101;
//         console.log(tableOf + " * " + num + " = " + tableOf * num);
// }



// for(let str=0; str<=10; str++){
//     console.log("abc")
// }







//! *******************************************************************************************************
//* *******************************************************************************************************








//! Date : 21/12/2023
//? Day 15
//* ----------------------

//!>>>>>>>>>>>>>             Functions in JavaScript          <<<<<<<<<<<<<<<<<<<<!//


//*                          Function Definition       ✅
//*                          Calling a Function        ✅
//*                          Function Parameter        ✅ 
//*                          Function Arguments        ✅
//*                          Function expression       ✅
//*                          Return keyword            ✅ 
//*                          Anonymous Function        ✅








//*::::::::::::::::              1. Function Definition              :::::::::::::::::::::*//




// let x = 5;
// let y = 6
// console.log(x+y)


//! syntax
// function functionName(){
//     // code to be executed 
// }



// function sum(){
//     let x = 5;
//     let y = 6;
//     console.log(x+y)
// }


// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.





//*::::::::::::::::              2. Calling a Function              :::::::::::::::::::::*//

//?  Defining a function does not execute it.
//?  A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//     let x = 5;
//     let y = 6;
//     console.log(x+y)
// }

// sum();


//*:::::::::::::              3. Function Parameter vs Function Arguments              :::::::::::::::::::::*//


//?  Function parameters are the names listed in the function's definition. 
//?  Function arguments are the real values passed to the function.


//? Function Defining
// function sum(x,y){
//     // let x = 5;
//     // let y = 6;
//     console.log(x+y)
// }


//? function calling
// sum(5,6);
// sum(15,6);
// sum(7,8);



// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

//! Why Functions? 

//? to use one code multiply times
//? You can reuse code: Define the code once, and use it many times.
//? You can use the same code many times with different arguments, 
//? to produce different results.

// OR

//? A function is a group of reusable code which can be called anywhere 
//? in your program. This eliminates the need of writing the same code 
//? again and again.

//* DRY : DO Not Repeat yourself



//! Practice Questions

//* Create a function called printMultiplicationTable that takes a number as a parameter and prints the multiplication table for that number up to 10.
//* Write a function called checkNumber that takes a number as a parameter and prints "Even" if the number is even and "Odd" if it's odd.
//* Write a function called checkPassword that takes a password as a parameter and prints "Valid" if the password is at least 8 characters long and "Invalid" otherwise.





//!:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//*::::::::::::::::              4. Function expressions             :::::::::::::::::::::*//


//? "Function expressions simply means 
//? create a function and put it into the variable "

//* function define
// function sum(){
//     let num1 = 20;
//     let num2 = 10; 
//     console.log(num1 + num2);
// }

// //* function call
// var funExp = sum();
// funExp;




//*::::::::::::::::              5. Return Keyword             :::::::::::::::::::::*//

//? In JavaScript, the return keyword is used within a function to specify 
//? the value that the function should return when it is called.

//? When a function is invoked, 
//? the return statement is used to send a value back to the calling code. 


//* function define
// function sum(){ 
//     let x = 5
//     let y = 5
//     // return x+y;
//     return x+y
// }

// // //* function call
// var funExp = sum();
// console.log(funExp);



//? It's important to note that the return statement not only provides a value 
//? but also terminates the execution of the function. 

//? Once a return statement is encountered, the function exits, 
//? and any code after the return statement will not be executed. 

//? If a function doesn't have a return statement or if it has a return statement without a value, 
//? the function will return undefined by default.



//*::::::::::::::::              6   . Anonymous Function            :::::::::::::::::::::*//

//? An anonymous function in JavaScript is a function that does not have a name.

//?  Unlike named functions, which have an identifier 
//? that can be used to refer to them elsewhere in the code, 

//? anonymous functions are typically used where the function is either short-lived 
//? or doesn't need to be referenced again.

// //* function define
// var sum = function (num1, num2){ 
// return num1+num2;
// }

// //* function call
// var funExp = sum(10,20);
// console.log(funExp);



//*************************************************************************************** */
//! ************************************************************************************* */


// function fact(){
// let fac = 1;
// for (let i=5; i>=1; i--){
//     fac = fac*i

//     console.log(fac)
// }
// }
// fact()






//!*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!!//
//!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!!//



//! 28-12-2023
//* Day 

//!>>>>>>>>>>>>>                    ECMAScript 2015/ES6                  <<<<<<<<<<<<<<<<<<<<!//


//? JavaScript = 1996
//? Js comes with ECMA International in 1997
//? then inhone decide kiya har saal kuch na kuch updates dene ka 

//? but year 2015 ka update bohot zyada famous hua because of some of its features  
//? also know as Modern JavaScript

// Like 

//*         ✅    1.  Let and Const                           2.  Destructuring

//*         ✅    3.  Template String                         4.  Object properties 

//*         ✅    5.  Default Arguments                   ✅    6.  Arrow Function

//*           7.  Rest operators                          8.  Spread operators 


//? 👻 Now It's Time for Modern JavaScript  
//? 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏




//*>>>>>>>>>>    1.  Let and Const  
//? Difference between var VS let VS const

// var numb = 12       // Assign
// numb = 10           // re -assign
// var numb = 8        // re-declare 



// let numb1 = 12       // Assign
// numb1 = 10           // re -assign
// let numb1 = 8         // re-declare 


// const numb2 = 12     // Assign

//! var              ->       function scope 
//! let / const      ->       block scope 


// function myBioData(){
//     const FName = "Navyum"
//     console.log(FName)

//     if(true){
//         const LName = "Ansari"
//         console.log(LName)
//         console.log(FName)
//     }
//     console.log(LName)
// }


// myBioData();




//! 29-12-2023
//* Day 
//? -------------------------



//!>>>>>>>>>>>     Template strings
// ? SHORTEST form of writing the console

// Template strings are a way to create strings in programming that can include variables or expressions by using ${} inside the string. They make it easier to work with dynamic content in strings.


// for( let num=1; num<=10; num++){
//         let tableOf = 101;
//         // console.log("Table of "+ tableOf + " * " + num + " = " + tableOf * num);
//         console.log(Table Of ->  ${tableOf} * ${num} =  ${tableOf*num})
// }






//! 5.  Default Arguments  
//? ------------------------------
// Default arguments are values assigned to function parameters that are used when the caller does not provide explicit values for those parameters. They act as fallback values, allowing a function to work even if some arguments are not specified by the caller.
//* function define

// var sum = function (num1=0, num2=1){ 
// return num1+num2;
// }

// //* function call
// var funExp = sum(2,2);
// console.log(funExp);






//! 6.  Arrow Function
//? -----------------------------

// Syntyax
//    () => {}

// var sum = (num1 = 0, num2 = 1) => {
//     return num1 + num2;
// }

// //* function call
// var funExp = sum(2, 2);
// console.log(funExp);




// ************************************************************************************** //
//! ************************************************************************************* //








//! 01/01/2024
//? --------------------------


//!>>>>>     Section 7👉              Arrays in JavaScript                  <<<<<<<<!//



// var friend1 = "ramesh"
// var friend2 = "kuch bhi"
// var friend3 = "aman"
// var friend4 = "rahul"

// var myFriends = ["ramesh", 23, "suresh", 20, "aman",19, "rahul", 35, true]
// console.log(myFriends)








// var myFriends = ["ramesh", "suresh", "aman", "rahul"]
// console.log(myFriends[myFriends.length-1])


// var friend = new Array(sachin, babli, navyum)
// // friend[0] = "Bablu";
// // friend[2] = "Harsh";
// // friend[1] = "Janvi";

// console.log(friend)


//? Both are equal in the value and data type. =>IMPLICITIY



//! 02/01/2024
//? --------------------------


//!>>>>>>>>>>>>>>>>>             Arrays in JavaScript                  <<<<<<<<<<<<<<!//

//? Using var 

// let friend1 = Bablu;
// let friend2 = Harsh;
// let friend3 = Frost;
// let friend4 = Janvi;


//? Using Array

//! 1. By array literal
// let friends = ["Bablu",17, "Harsh",17, "Frost",17, "Janvi",19]

//! 2. By creating instance of Array directly (using new keyword)
// var friends = new Array ();
// friends[0] = "Bablu";
// friends[1] = "Harsh";
// friends[2] = "Janvi";

//! 3. By using an Array constructor (using new keyword) 
// let arr = new Array("")

//* A variable that contains multiple values is array
//* In JavaScript we can use multiple data types in a array





//* What we will do in Array
//! Methods 
//? Traversal of Array  ✅ 
//? Searching and Filter in an Array
//? How to Sort and Compare an Array
//? How to Insert, Add, Replace and Delete elements in Array (CRUD)
//? Map(); Replace(); Filter 



//**************************************** */
//? Traversal of Array
//**************************************** */
//? In this we navigate the elements

// let friends = ["Bablu", "Harsh", "Frost", "Janvi"]

// console.log(friends[2]);
// console.log(friends[friends.length - 1]);

// console.log(friends.length);


//! Using For 
// let friends = ["Bablu", "Harsh", "Frost", "Janvi"]

// for(let a=0;a<=friends.length-1; a++){
// console.log(friends[a])
// }


//! Using For-in-loop 

// let friends = ["Bablu", "Harsh", "Frost", "Janvi"]
// for(elements in friends);

// console.log(elements);

//? it provides the index no. 




//! Using For-of-loop 
// let friends = ["Bablu", "Harsh", "Frost", "Janvi"]
// for(elements of friends);

// console.log(elements);

//? it provides the element of last index




// //* ForEach 
// //? using  anonymous 
// let friends = ["Bablu", "Harsh", "Frost", "Janvi"]
// friends.forEach(function(element,index,array){
//   console.log(element + " index of " + index + " = " + array);
// });

//// friends.forEach((element,index,array)=>{
////     console.log(${element} index of ${index} = ${array})
//// });




//! 03/01/2024
//? --------------------------


//***************** */
//? Searching and Filter in an Array
//***************** */

//* Array.prototype.indexOf() 🙋‍♂

//? Returns the first (least) index of an element within the array equal 
//? to an element, or -1 if none is found. It search the element from the 
//? 0th index number 
//! syntax = array.indexOf(element,index)   
//? Do forward search

// let shoes = ["Nike", "Bata", "Sneaker", "sandal", "Bata"]

// console.log(shoes.indexOf("Bata",2));




//* Array.prototype.lastIndexOf()

//! syntax = array.lastindexOf(element,index) 
//? Do Backward search

// let shoes = ["Nike", "Bata", "Sneaker", "sandal", "Bata"]

// console.log(shoes.lastIndexOf("Bata",3));



//! Array.prototype.includes()
//? it provides value in boolean 

// let shoes = ["Nike", "Bata", "Sneaker", "sandal"]

// console.log(shoes.includes("Bata",2));


//!  Filters
//* Array.prototype.find()

// arr.find(callback(element[, index[, array]]), [thisArg])

//? Returns the found element in the array, if some element in the 
//? array satisfies the testing function, or undefined if not found.
//? Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// // prices < 400

// const findElem = prices.find((currVal) =>  currVal > 800 );
// console.log(findElem);



//! Array.prototype.findIndex()

//? Returns the found index in the array, if an element in the 
//? array satisfies the testing function, or -1 if not found.



// const prices = [200,300,350,400,450,500,600];

// const findElem = prices.findIndex((currVal) =>  currVal < 400 );
// console.log(findElem);





//! Array.prototype.filter()
// IMP : use in React and Node
//? Returns a new array containing all elements of the calling 
//? array for which the provided filtering function returns true.


// const prices = [200,300,350,400,450,500,600];

// // prices < 400 

// const newPriceTag = prices.filter((elem, index) => {
//   return elem <400;
//     // return elem >1400;
// })
// console.log(newPriceTag);




//! Array.prototype.sort() 🙋‍♂

//? The sort() method sorts the elements of an array in place and 
//? returns the sorted array. The default sort order is ascending, built 
//? upon converting the elements into strings, 
//? then comparing their sequences of UTF-16 code units values.


// const months = ['March', 'Jan', 'Dam','Feb', 'April' , 'Dec', 'Nov'];
// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());                 // sort method doesn't work with numbers


//? However, if numbers are sorted as strings, 
//? "25" is bigger than "100", because "2" is bigger than "1".

//? Because of this, the sort() method will produce an incorrect 
//? result when sorting numbers





//! 04/01/2024
//? --------------------------

//::::::::::::::::              4. Perform CRUD              ::::::::::::::::::::://


//! How to Insert, Add, Replace and Delete elements in Array (CRUD)

//* Array.prototype.push() 🙋‍♂
//? The push() method adds one or more elements to the 
//? end of an array and returns the new length of the array.


// const animals = ['pigs','goat','sheep'];  // if want to add one more element here then
// // //animals.push('chicken');
// // const count = animals.push('chicken');
// const count = animals.push('chicken','cats','cow');

// console.log(animals);
// console.log(count);




//* Array.prototype.pop() 🙋‍♂
//? The pop() method removes the last element from an array and returns 
//? that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'tomato', 'cabbage'];

// // console.log(plants);
// console.log(plants.pop());
// console.log(plants);






//* Array.prototype.unshift() 🙋‍♂
//? The unshift() method adds one or more elements to the 
//? beginning of an array and returns the new length of the array

// const animals = ['pigs','goat','sheep'];  // if want to add one more element here then

// const count = animals.unshift('chicken','cats','cow');

// console.log(animals);
// console.log(count);


// //* 2nd eg
// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);



//* Array.prototype.shift() 🙋‍♂
//? The shift() method removes the first element from an array and returns 
//? that removed element. This method changes the length of the array.


// const myNumbers = [1,2,3,5];

// myNumbers.shift();
// console.log(myNumbers);


//! ----------------------------------------------------------------------------------------




//! Practice Questions
//? Create an array numbers with elements 1, 2, and 3. Add the element 4 to the end of the array and remove the first element.
//? . Starting with the array [5, 10, 15, 20], remove the last element and add the number 25 to the beginning.

//? Given an array of numbers [8, 6, 11, 5, 2, 9], use the find method to find the first number greater than 7.
//? Using the same array, find the index of the number 5 using the findIndex method. 

//? Create an array fruits with elements 'apple', 'banana', 'orange', 'grape'. Check if 'orange' is included in the array.
//? Using the same array, use the includes method to check if 'pear' is in the array.

//? Given an array of numbers [3, 7, 12, 8, 21, 5], use the filter method to create a new array with only the even numbers.

//? Create a function filterWords that takes an array of strings and returns a new array containing only strings with a length greater than 5. Test it with ['apple', 'banana', 'kiwi', 'grape'].



//! -----------------------------------------------------------------------------------------




// ****************************************
//! JavaScript Array Methods
// ****************************************



//! Concat 
// * -----------------------

//? It returns a new array object that contains two or more merged arrays.

// var arr1=["C","C++","Python"];  
// var arr2=["Java","JavaScript","Android"];  

// var mer = arr1.concat(arr2)
// console.log(mer)



//! CopyWithin()
// *-------------------------
//? The JavaScript array copyWithin() method copies the part of the given array with its own elements and returns the modified array. This method doesn't change the length of the modified array.


//* Syntax
// array.copyWithin(Target(copy), start(jo copy karwana hy),end(delete element))  



// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// var copy = arr.copyWithin(1,0,1)
// console.log(copy)



//! every()
// * ---------------------------------
//? It determines whether all the elements of an array are satisfying the provided function conditions.

// var marks=[50,40,45,37,20];  

// function check(value)  
// {  
//   return value>30;  //return false, as marks[4]=20  
// }  


// console.log(marks.every(check))




//! flat()
// * ---------------------------------

// var arr=['a','b',['c','d',['e','f',['g','h',[5,5]]]]]; //given 2D array 

// // // var arr = [1,[2],[3],4,[5]]

// // var newArr=arr.flat(3);
// var newArr=arr.flat(Infinity);

// console.log(newArr)


//! fill()
// * ---------------------------------
//? Syntax :
// arr.fill(value, start, end)  


// var arr=["AngularJS","Node.js","JQuery"];  
// var result=arr.fill("Bootstrap",1);  
// console.log(result) 



//! join()
// * ---------------------------------
//? Syntax :
// array.join(separator)  

// var arr=["AngularJs","Node.js","JQuery"]  
// var result=arr.join("--")  
// console.log(result)




//? :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::





//************************* */
//! Date : 7/11/2023
//! Day 16
//************************* */



//!>>>>>>>>>>>>>>>>>             Strings in JavaScript                  <<<<<<<<<<<<<<!//

// var nm = "mera naam 'Bablu' hai"
// var nm = 'mera naam "Bablu" hai'
// var nm = mera 'naam' "Bablu" hai
// console.log(nm.split())


//* Method of strings

//! 😀11: challenge Time 🏁
//* Display only 280 characters of a string like the one used in Twitter?
//? Given a string, use the charAt method to retrieve and log the character at the third position.
//* Given a string, use the toUpperCase method to convert the entire string to uppercase.
//? Given a string, use the slice method to create a new string that includes only the first five characters.
//* Given a string, use the indexOf method to find the position of a specific substring within the string.
//? Given a sentence, use the split method to create an array of words.
//* Question: Given a string with multiple occurrences of the word "apple," use the replace method to replace all instances of "apple" with "orange."
//? Question: Explain the differences between the substring, substr, and slice methods in JavaScript.
//* Question: How does the trim method work, and when might you use it with strings?
//? Question: Explain the difference between the charAt and charCodeAt methods in JavaScript.
//* Question: How does the concat method work with strings, and what is an alternative modern syntax for concatenating strings?





// ************************************************************************************** //
//! ************************************************************************************ //

//************************* */
//! Date : 12/11/2023
//! Day 20
//************************* */

//? Question 1: Create an array of numbers and write code to find the sum of all elements.
//* Question 2: Given an array of strings, write a program to find the longest string in the array.
//? Question 3: Write a function that takes an array and returns a new array with only the unique elements.
//* Question 4: Given two arrays, write a program to find the common elements between them.
//? Question 5: Implement a function that reverses the order of elements in an array without using the reverse method.
//* Question 6: Create an array of objects with each object representing a person (with properties like name, age, etc.). Write a program to filter out people who are below a certain age.
//? Question 7: Write a function that takes an array of numbers and returns a new array with each number squared.
//* Question 8: Given an array of words, write a program to alphabetically sort the words.
//? Question 9: Implement a function that rotates the elements of an array to the right by a given number of positions.
//* Question 10: Write a program to find the second smallest number in an array of numbers.

//! Strings:
//? Question 11: Write a function that capitalizes the first letter of each word in a given sentence.
//* Question 12: Given a string, write a program to count the occurrences of each character in the string.
//? Question 13: Implement a function that checks if a given string is a palindrome.
//* Question 14: Write a program to remove all the vowels from a given string.
//? Question 15: Given a sentence, write a program to reverse the order of words.







//************************* */
//! Date : 13-14/12/2023
//! Day 21-22
//************************* */

//!>>>>>                  Date & Time in JavaScript                 <<<<<<<<!//

//! Date Methods (get and set)
//! Time Methods (get and set)

//? JavaScript Date objects represent a single moment in time in a 
//? platform-independent format. Date objects contain a Number 
//? that represents milliseconds since 1 January 1970 UTC.

//* 👉 Creating Date Objects
//* There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
//? it takes 7 arguments
// new Date(milliseconds)
//? we cannot avoid month section 
// new Date(date string)



//* new Date() 🙋‍♂
//? Date objects are created with the new Date() constructor.


// let currDate = new Date(); 
// console.log(currDate);            // 2023-12-14T06:50:02.874Z

// console.log(new Date());
// console.log(new Date().toLocaleString()); 
// console.log(new Date().toString()); 



//* Date.now() 🙋‍♂
//? Returns the numeric value corresponding to the current time—the number 
//? of milliseconds elapsed since January 1, 1970 00:00:00 UTC


// let a=1702537744031;
// console.log(Date.now());            // 1702537744031
// console.log(Date.now()-a);            //



//! new Date(year, month, ...) 🙋‍♂
//? 7 numbers specify year, month, day, hour, minute, second, 
//? and millisecond (in that order)
//? Note: JavaScript counts months from 0 to 11.

//? January is 0. December is 11


// var d = new Date(2023,10,2,14,27,58,0);         //02/11/2023, 14:27:58
// var d = new Date(2023, 0, 5);
// var d = new Date(0);
// var d = new Date(2023,0);                      // 01/01/2023, 00:00:00
// console.log(d.toLocaleString());


//! new Date(dateString) 🙋‍♂
//* new Date(dateString) creates a new date object from a date string

// var d = new Date("November 2, 2023 11:13:00");
// console.log(d.toLocaleString());
////// console.log(d.toLocaleString());





//! new Date(milliseconds) 🙋‍♂
//* new Date(milliseconds) creates a new date object as zero time plus milliseconds:

// var d = new Date(0);
// var d = new Date(1702537744031);         //14/12/2023, 12:39:04
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());



//!👉 Dates Method

// const curDate = new Date();

// // how to get the individual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear( ));
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());






//************************* */
//! Date : 19/11/2023
//! Day 23
//************************* */



//! how to set the individual date 


// const curDate = new Date();

// console.log(curDate.setFullYear(2022));             // 1671425429929
// The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2023, 11, 19));         //1702961690551
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());





//!👉 Time Methods

// const curTime = new Date();

// //* how to get the individual Time 

// console.log(curTime.getTime());
// //* The getTime() method returns the number of milliseconds 
// //* since January 1, 1970
// console.log(curTime.getHours());
// //* The getHours() method returns the hours of a date as a 
// //* number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());                                      
// console.log(curTime.getMilliseconds());



//! how to set the individual Time 

// let curTime = new Date();

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));





//* Practice Time 
// new Date().toLocaleTimeString(); // 11:18:48 AM

// new Date().toLocaleDateString(); // 11/16/2015

// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM




//! Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();



// ************************************************************************************** //
//! ************************************************************************************* //






//!>>>>>                Math Object in JavaScript                 <<<<<<<<!//

//* The JavaScript Math object allows you to perform mathematical tasks on numbers.

//* console.log(Math.PI); 🙋‍♂ ✅
// console.log(Math.PI);



//* Math.round() 🙋‍♂                 // 4.=5 == 4     ,    4.>5==5     ✅
//? returns the value of x rounded to its nearest integer

// let num = 10.401;
// console.log(Math.round(num));


//* Math.pow() 🙋‍♂     ✅
//? Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,6));
// console.log(2**3);


//* Math.sqrt() 🙋‍♂     ✅
//? Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


//* Math.abs() 🙋‍♂    ✅
//? Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));



//* Math.ceil() 🙋‍♂          ✅          //  chhat means Upar
//? Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));



//* Math.floor()  🙋‍♂         ✅         // nicche
//? Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7)); 
// console.log(Math.floor(99.1)); 



//* Math.min() 🙋‍♂          ✅
//? Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));



//* Math.max() 🙋‍♂   ✅
//? Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));



//* Math.random() 🙋‍♂ 
//? Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.ceil(Math.random()*6)); // 0 to 9



//* Math.round() 🙋‍♂         ✅
//? The Math.round() function returns the value of a number 
//? rounded to the nearest integer.

// console.log(Math.round(4.6));
// console.log(Math.round(99.1));





//* Math.trunc()  🙋‍♂               ✅
//? The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.trunc(-99.1));
// console.log(Math.floor(-99.1));





// ************************************************************************************** //
//! ************************************************************************************* //






//!>>>>>                Numbers                 <<<<<<<<!//

// var num = (354.10);

// console.log(Number.isInteger(num))


// var a="50";  
// var b="50.25"  
// var c="String";  
// var d="50String";  

// console.log(Number.parseFloat(a))
// console.log(Number.parseFloat(b))
// console.log(Number.parseFloat(c))
// console.log(Number.parseFloat(d))









































