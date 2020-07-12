// set user confirm variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// assign variables
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//this variable declares the if statements 
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// ask user for password length, set to variable prompt
var passwordlength = prompt("How many character would you like your password? Choose between 8 to 128 charcters");

// first if statment = this much be true 
if(passwordlength < 8 || passwordlength > 128){
  var passwordlength= prompt("you must choose between 8 and 128");

} else {
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
};

// generate a character if 

// do a for loop for the passwordlength - max in the password length 

// inside that for loop you are generating random characters - push them into an array or string

//if the user accepts char type add that char type to one lagrge array - if statements

// var index = Math.floor(Math.random * array.length) - for loop(over passwordlength)

// array[index]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);