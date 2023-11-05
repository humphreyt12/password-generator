// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var number = "0123456789";
var specialcharacter ="!@#$%^&*()?.<\>|=+:;,[-_]";

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

var passwordCriteria =  confirm("Your password should have an uppercase letter, lowercase letter, numeric, and a special character! Click OK to continue");

var passwordCharacter = confirm("Your password have at least 8 characters and no more than 128 characters! Click OK to continue");

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

var userChoice = window.prompt("Select the criteria to include in the password.");

function selectpassword(lowercase, uppercase, number, specialcharacter)
{
  var option = document.createElement("option");
  option.lowercase = lowercase;
  option.uppercase = uppercase;
  option.number = number;
  option.specialcharacter = specialcharacter;

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
  return;
}
}

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

function generatePassword() {
  let password = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?.<\>|=+:;,[-_]';

  for (let i = 0; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      password += str.charAt(char)

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  }

  return password;

}
if (passwordCriteria === password) {
window.alert("Your password matches the password criteria");
  generatePassword();

} else {
  window.alert("Your password does not match the password criteria");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
