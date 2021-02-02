// 1) Creating a variable
// In this example create varianle a, varianle b and varianle sum
// I show the value of sum in the console
var a = 10;
var b = 3;
var sum = a+b
console.log(sum);

// Data type (total 5,today 3)
// 1) Sting = character, sentence or word
// you use '' or "" to define a string

var name = "Asyraf"
console.log(name);
var sentence = "I'm happy"
var anothersentence = 'He says "Hello"'
console.log(sentence);
console.log(anothersentence);
// To combine string,you use + (string operation)
var greeting = "Hello "+name;
console.log(greeting);

// 2) Second data type is number
// a = 10, b = 3 (line 4 and 5)
var minus = a-b;
var product = a*b;
var division = a/b;
var modulo = a%b; // 10 / 3 the balance is (baki = 1)
console.log(minus);
console.log(product);
console.log(division);
console.log(modulo);

// 3) true or false
var ishungry = true;
var ispenat = false;
// AND Logic need to be true (&&)
// OR Logic either one need to be true for it to be true (||)

var rehat1 = ishungry && ispenat
var rehat2 = ishungry || ispenat
console.log(rehat1);
console.log(rehat2);

// Two control flow

// 1) If else

if (ishungry == true){ // == means comparison
console.log("jom makan");
}
else {
  console.log("jom study");
}

//><
var age = 19;
// either , 18 or bigger than (otherwise / and lain-lain...)
if (age < 18){
  console.log("You cannot watch the movie");
}

else{
  console.log("You can watch the movie");
}

if (age < 13){
  consolde.log("You can watch the movie");
}
else if (age < 18){
  console.log("You can watch the movie with parent");
}
else {
  console.log("You can watch the movie");
}

// Bring out value 19 is and odd number
// 16 is an even number

var number = 19
if (number % 2 == 1){
  console.log(number + " is an odd number")
}
else {
  console.log(number + " is an even number") 
}
//
var userAge = 11;
var ticketPrice = 110;
    
if (userAge < 18){
  console.log("The ticket price is " +ticketPrice*0.5);
}
else if(userAge > 40){
  console.log("The ticket price is "+ticketPrice);
}
else if(userAge < 65){
  console.log("The ticket price is "+ticketPrice*0.75);
}
else {
  console.log("The ticket price is "+ticketPrice*0.5);
}

// For loop(repitition)...repeat this 10 times

//from 0  ;10 every iteration add by 1
for(var i = 0; i < 10; i++){
    console.log(i);
 }
//from 10  ;0 every iteration minus 1
for(var i = 10; i > 0; i--){
  console.log(i);
}
//from 1 ; until 10..every iteration add by 2
for(var i = 1; i<10; i+=2){
  console.log(i);
}

//Exercise
var multiplier = 3;
var lines = 10;

for(var i = 1; i < lines; i++){
    console.log(i + "x" + multiplier + "=" + i*multiplier);
}


