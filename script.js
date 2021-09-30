var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var nums = "1234567890";
var specials = "!@#$%^&*()_+{}:\"<>?[];',./";

function generatePassword() {
  var length = parseInt(prompt("How many chars do you want?"));

  if (length < 8 || length > 128) {
    return;
  }

  var wantUppers = confirm("Do you want uppers?");
  var wantLowers = confirm("Do you want Lowers?");
  var wantNums = confirm("Do you want nums?");
  var wantSpecials = confirm("Do you want Specials?");

  var poss = "";

  if (wantUppers) {
    poss += uppers;
  } 
  if (wantLowers) {
    poss += lowers;
  } 
  if (wantNums) {
    poss += nums;
  } 
  if (wantSpecials) {
    poss += specials;
  } 

  console.log("******",poss);
  var password = "";

  for (i = 0; i < length; i++) {
    var rnum = Math.floor(Math.random() * poss.length);
    var rchar = poss[rnum];
    password += rchar;
  }

  return password;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
