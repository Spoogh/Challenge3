// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar =["!","#","$","%","&",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_"];

var lowerCase = ["abcdefghijklmnopqrstuvwxyz".split];

var caps = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split];

var numbers= ["1234567890".split];

var passwordLength = 10;

 var special= confirm("Would you like special characters?");

 var capwindow = confirm("Would you like capital letters?");

 var numwindow = confirm("Would you like numbers?");

 var passload;

 function randomChar(){

  var passNumbA = [];

  if (special===true){
    passNumbA = passNumbA.concat(specialChar);
  }

  if (capwindow===true){
   passNumbA = passNumbA.concat(caps);
  }

  if (numwindow===true){
    passNumbA = passNumbA.concat(numbers);
  }
  
  var randomCharSelect= passNumbA[Math.floor(Math.random() * passNumbA.Length )]

  return passload = passload.concat(randomCharSelect);


 }
  
 function generatePassword(){

  if (passload) {
    passload = [];
 

  for ( var i = 0; i < passwordLength; i++){
    randomChar();
  }



  
  
                }
                return passload;
//console.log(generatePassword());
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value= password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function()
{

 writePassword();

})
writePassword();