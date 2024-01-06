// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let chosenOptions = {};
let passwordArray = [];

// Function to prompt user for password options

function getPasswordOptions() {
  chosenOptions = Object.create(chosenOptions);
  chosenOptions.lowercase = confirm("Use lowercase letters?");
  chosenOptions.uppercase = confirm("Use uppercase letters?");
  chosenOptions.numbers = confirm("Use numbers?");
  chosenOptions.special = confirm("Use special characters?");
  if (
    chosenOptions.lowercase === false &&
    chosenOptions.uppercase === false &&
    chosenOptions.numbers === false &&
    chosenOptions.special === false
  ) {
    alert("You must choose some parameters!!!"), getPasswordOptions();
  }
  chosenOptions.passLength = prompt(
    "How long should it be? Choose a number between 8 and 128."
  );
  if (8 > chosenOptions.passLength) {
    alert("Your password must be longer than 8 characters."),
      getPasswordOptions();
  } else if (chosenOptions.passLength > 128) {
    alert("Your password must be 128 characters or less"), getPasswordOptions();
  }

  if (typeof chosenOptions.passLength === isNaN) {
    alert("You must choose a number for your password length!"),
      getPasswordOptions();
  }
  return chosenOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {
  if (chosenOptions.lowercase === true) {
    for (let i = 0; i < lowerCasedCharacters.length; i++) {
      passwordArray.push(lowerCasedCharacters[i]);
    }
  }
  if (chosenOptions.uppercase === true) {
    for (let i = 0; i < upperCasedCharacters.length; i++) {
      passwordArray.push(upperCasedCharacters[i]);
    }
  }
  if (chosenOptions.numbers === true) {
    for (let i = 0; i < numericCharacters.length; i++) {
      passwordArray.push(numericCharacters[i]);
    }
  }
  if (chosenOptions.special === true) {
    for (let i = 0; i < specialCharacters.length; i++) {
      passwordArray.push(specialCharacters[i]);
    }
  }
  debugger;
  return passwordArray;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getRandom();
  return "password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
