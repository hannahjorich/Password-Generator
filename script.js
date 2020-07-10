// Assignment Code
var generateBtn = document.querySelector("#generate");
var numString = "123456789";
var numArray = numString.split("")
console.log(numArray)

// ask user for password length, set to variable prompt
// ask user for different char types - 
//if the user accepts char type add that char type to one lagrge array - if statements
// var index = Math.floor(Math.random * array.length) - for loop(over passwordlength)
// array[index]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
