let myName ="Hayden Cooper"
alert("Welcome To The Pow Pow Reviews!")

let userName = prompt("Enter your name please");
console.log(userName);

let firstName = "Hayden"
let lastName = "Cooper"

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

function addTwoNumbers(num1, num2){
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}

addTwoNumbers (firstName, lastName)