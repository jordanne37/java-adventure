// Assignment Code
var generateBtn = document.querySelector("#generate");
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "?"]

  var length = "";
  var upperCase;
  var lowerCase;
  var numbers;
  var special;


function generatePassword() {
  var length = window.prompt("How long do you want your password?");
    while(length <=7 || length >=128) {
      alert("Password cant be shorter than 8 characters or longer than 128 characters");
      var length = window.prompt("How long do you want your password?")
    }
    alert("First step done! YAY!")

  var upperCase = confirm("Click OK if you want upper case letters in your password");
  var lowerCase = confirm("Click OK if you want lower case letters in your password");
  var numbers = confirm("Click OK if you want numbers in your password");
  var special = confirm("Click OK if you want special characters in your password");

    while(upperCase === false && lowerCase === false && special ===false && numbers === false) {
      alert("INVALID");
      upperCase = confirm("Click OK if you want upper case letters in your password");
      lowerCase = confirm("Click OK if you want lower case letters in your password");
      numbers = confirm("Click OK if you want numbers in your password");
      special = confirm("Click OK if you want special characters in your password");
    }

    var passwordText = []

    if(upperCase) {
      passwordText = passwordText.concat(UpperCase)
    }

    if(lowerCase) {
      passwordText = passwordText.concat(LowerCase)
    }

    if(numbers) {
      passwordText = passwordText.concat(Numbers)
    }

    if(special) {
      passwordText = passwordText.concat(Special)
    }

    console.log(passwordText)

    var random =""

    for (var i = 0; i < length; i++) {
      random = random + passwordText[Math.floor(Math.random() * passwordText.length)]
    console.log(random)
    }
    return random;

  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
