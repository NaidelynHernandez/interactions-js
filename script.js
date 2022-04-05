let heading;
let executeButton;
let inputElement;
let outputParagraph;

let fortunes =["You will receive good news today", "You will receive bad news ", "You will get a promoted today", "You will make a new friend", "You will be successful"];

window.addEventListener('DOMContentLoaded', function()  {


    heading = document.getElementById("title");

    executeButton = document.getElementById("half-button");
    executeButton = document.getElementById("fortune-button");
    executeButton = document.getElementById("restyle");
    inputElement = document.getElementById("half-input");
    inputElement = document.getElementById("fortune-input");
    outputParagraph = document.getElementById("output");
      //outputDiv = document.getElementById("fortune-output");
    executeButton.addEventListener("click", function(){
    Fortune();

  });

  executeButton.addEventListener("click", function(){
  halfNumber();

});


});
/* Write a function called halfNumber that will take one argument (a number),
divide by 2, and return the result as an alert. It should also log a string
to the console like "half of 5 is 2.5"
*/

function halfNumber(){
let numInput= document.getElementById("half-input").value;

alert("The number you submitted:  " + numInput + " when halfed by 2, will be " + numInput/2);


}

/* PROMPT 2:  Write a function called `fortune` that will take one argument
(your visitor's name or something else)
and prints a randomly generated response, pulling random options
from an array, into an element of your page.*/

function Fortune(){

  let name = inputElement.value;

  let randomFortune = Math.floor(Math.random()*fortunes.length);

  outputParagraph.innerText = "Lets see " + name + " your fortune is as follows :  " + fortunes[randomFortune];

restyle();
  }

/* PROMPT 3: Write a function called `restyle` that applies
new CSS styles to the `output` text
in a random manner each time it fires.
Modify at least three CSS properties. */

function restyle(){

let one = Math.random() * 255 -17;
let two = Math.random() * 255 -17;
let three = Math.random() * 255 -17;


let outputColor = "rgb(" + one + "," + two + "," + three + ")";
let outputColor2= "rgb(" + (one+20) + "," + (two-20) + "," + (three+20) + ")";
outputParagraph.style.color = outputColor;
heading.style.color = outputColor2;

document.body.style.backgroundColor= "rgb(" + (one-70) + "," + (two-70) + "," + (three-70) + ")";


}
