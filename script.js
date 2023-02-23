let myName ="Hayden Cooper"
alert("Welcome To The Pow Pow Reviews!")



// 4 ways to declare a variable (create one)

// let <-- changeable variable
// const <-- constant variable, can't be changed
// var <-- bad practice in 102
// (none) <-- bad practice in 102

// DATA TYPES
// string --> "text", "42", ""
// numbers --> 42, 123, 456
// boolean --> true/false

// console.log("Hello world!");

// let myFavColor;
// console.log(myFavColor);

// myFavColor = "yellow";
// console.log(myFavColor);


// myFavColor = "purple";
// console.log(myFavColor);

// let myAge = 34;

// INPUT FROM A USER

// structure of conditionals
// if(this is true){execute code} else if (THIS is true){execute code} else {execute code}

// alert("Hello, " + userName);

// WRITING TO THE HTML DOCUMENT


let userName = prompt("Enter your name please");
console.log(userName);

document.write("<p class='intro'>Welcome To Powder World</p>");
document.write("<p class='intro'>The Best Reviews On The Internet,</p> " + userName);

let singleordouble = prompt("Do you love fresh snow? Type yes or no");
console.log(singleordouble);

if(singleordouble == 'yes'){
  document.write("Welcome to the club!");
  document.write("<style>.intro {color: green;}</style>")
} else if (singleordouble == 'no'){
  document.write("Im confused!");
  document.write("<style>.intro {color: red;}</style>")
} else {
  document.write("Hopefully you get some good information from this website.");
}
