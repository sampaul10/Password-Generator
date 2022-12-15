// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Write password to the #password input
function generatePassword(num) {
  var pass = '';
  for (var i = 0; i < num; i++) {
    pass += getPasswordCharacter();
  }
  return pass;
}

function writePassword() {
  var length = prompt("Enter password length:")
  var password = generatePassword(length);

  if (length <= 128)  {
  var passwordText = document.querySelector("#password");

  //prompt("Enter password length");
  
  passwordText.value = password;
  } else {
    alert("please enter valid length")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
