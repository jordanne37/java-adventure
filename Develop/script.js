// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How long do you want your password?");
    if(length <=7 || length >=128) {
      alert("Password cant be shorter than 8 characters or longer than 128 characters");
    }
    alert("First step done! YAY!")

  var upperCase = confirm("Click OK if you want upper case letters in your password");
  var lowerCase = confirm("Click OK if you want lower case letters in your password");
  var numbers = confirm("Click OK if you want numbers in your password");
  var special = confirm("Click OK if you want special characters in your password");
    
    if(upperCase === false && lowerCase === false && special ===false && numbers === false) {
      alert("INVALID")
    }
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
