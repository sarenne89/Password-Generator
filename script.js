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
  if (
    chosenOptions.passLength > 128 ||
    chosenOptions.passlength < 8 ||
    chosenOptions.passLength === NaN
  ) {
    alert(
      "Your password should be at least 8 characters long but no longer than 128 characters."
    ),
      getPasswordOptions();
  }
  debugger;
  return chosenOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
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
