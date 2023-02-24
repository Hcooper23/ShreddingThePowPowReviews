let myName = "Hayden Cooper"
alert("Welcome To The Pow Pow Reviews!")

let userName = prompt("Enter your name please");
console.log(userName);


document.write("<p class='intro'>Welcome To Powder World</p>");
document.write("<p class='intro'>The Best Reviews On The Internet,</p> " + userName);

let singleordouble = prompt("Do you love fresh snow? Type yes or no");
console.log(singleordouble);

if (singleordouble == 'yes') {
  document.write("Welcome to the club!");
  document.write("<style>.intro {color: green;}</style>")
} else if (singleordouble == 'no') {
  document.write("Im confused!");
  document.write("<style>.intro {color: red;}</style>")
} else {
  document.write("Hopefully you get some good information from this website.");
}

function snowdays() {
  let snowdays = prompt("Do you love fresh snow days? Type YES! or No:(");
  console.log(snowdays)
  console.log(typeof snowdays)
  if ((snowdays == "YES!")) {
    alert("YAY!!! Enjoy this website!")
  }
  else if (snowdays == "No:(") {
    alert("Boo... okay. Well, try to enjoy this webiste.")
  }
  else {
    snowdays = prompt("Please type that correctly :)")
    // snowdays();
  }
  while (snowdays == null || snowdays == "") {
    snowdays = prompt("Please provide an answer");
    // snowdays();
  }
  // else if {
  //   snowdays=prompt("Please type that correctly :)")
  //   // snowdays();
  // }
}
snowdays();

function timeOfDay() {
  let time = prompt('What hour is it? (0-23)'); // 15;
  let message = '';

  if (time <= 11) {
    message = 'Good Morning!';
  } else if (time <= 18) {
    message = 'Good Afternoon!';
  } else if (time < 24) {
    message = "Good Evening!";
  } else {
    message = "That hour does not exist!";
  }

  return message;
}

function displayRating() {

  let output = '';
  let rating = prompt('scale of 1-5, how many stars?');
  for (let i = 1; i <= rating; i++) {
    output += "<img class='star' src='IMG_3903.jpg'>"
  }

  return document.write(output);
}

guessANumber();
