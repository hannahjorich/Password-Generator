// Assignment Code
var numString = "0123456789";
var numArray = numString.split("");
console.log(numArray); 
// console.log after ever variable so you can see if the array is working
var charString = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~;";
var charArray = charString.split("");
console.log(charString);
var abcUpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArray = abcUpperString.split("");
console.log(abcUpperString);
var abcLowerString = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArray = abcLowerString.split("");
console.log(abcLowerString);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// ask user for password length, set to variable prompt
var passwordlength = prompt("How many character would you like your password? Choose between 8 to 128 charcters");

// use true and false prompts to see num, up, lower, char, 

// write an if statement for password length 

// generate a character list before for loop 

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
