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
    snowdays=prompt("Please type that correctly :)")
    // snowdays();
  }
  while (snowdays == null || snowdays == "") {
    snowdays=prompt("Please provide an answer");
    // snowdays();
  }
  // else if {
  //   snowdays=prompt("Please type that correctly :)")
  //   // snowdays();
  // }
}
snowdays();