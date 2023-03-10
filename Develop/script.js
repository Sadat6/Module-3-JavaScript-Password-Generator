var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var correctPrommpts = getPrompts();  //either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrommpts){
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //I would generatePassword based on the prompts
  var password = "";
  for (var i=0; i< characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr =[];

  characterLength = parseInt(prompt("how much character do you want for your password? select from (8 - 128 characters)")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { // I'm hoping that this is all false
    alert("Character length should to be a number, 8-128 digit. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters for your password?")){
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("Would you like uppercse letters for your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters for your password?")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers for your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}