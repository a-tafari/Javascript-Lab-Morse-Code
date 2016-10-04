

function morseCode() {

var display = document.getElementById("result");

this.getInput= function(){
  var userInput= prompt("What would you like to turn into morse? ");
  var array= makeCharArray(userInput)//need to take users input and turn it into an array of characters
  convert(arr);
};
var makeCharArray= function(userInput){
  var char = new Array();
  for (var x=0 ; x< userInput.length; x++){
    char.push(userInput[x]);
  }
  console.log(char);
  return char;
};
var convert = function(c){
  var morse ="";
  for (var x=0; x<c.length; x++ ){
    morse += alphabet[c[x]];
  }
  display.innerHTML= morse;
};
var alphabet = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    " ": " "
};

}

var morse = new morseCode();
morse.askInput();
