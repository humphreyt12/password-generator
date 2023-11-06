// Assignment Code
var generateBtn = document.querySelector("#generate");
var passChoice = {
 lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
 uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"],
 number:["0","1","2","3","4","5","6","7","8","9"],
 specialcharacter:["!","@","#","$","%","^","&","*","(",")","?",".","<","-"]
};

function generatePassword() {
  let password = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?.<\>|=+:;,[-_]';

  for (let i = 0; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      password += str.charAt(char)
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria


//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var passwordUpper =  confirm("Do you want your password to include upper case letters? Click OK to continue");
var passwordLower = confirm("Do you want your password to include lower case letters? Click OK to continue");
var passwordNumber = confirm("Do you want your password to include numbers? Click OK to continue");
var passwordSpecialCharacters = confirm("Do you want your password to include special characters? Click OK to continue");


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordCharacter = confirm("Your password have at least 8 characters and no more than 128 characters! Click OK to continue");
var userChoice = window.prompt("How many characters do you want in your passwor?");

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

if (passChoice === password){
  lowercase;
}
else if (
  (passChoice === uppercase)  
  (passChoice ===  number)
  (passChoice === specialcharacter)
) {

}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);