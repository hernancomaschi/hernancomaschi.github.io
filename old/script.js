/* 
Lakeland Reeds Bed & Breakfast style sheet 
Filename: script.js

Author:   Hernan Comaschi
Date:     2023
HTML5 and CSS3 Illustrated Unit M, Lessons
*/

var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}

/* create variables */
var fromValue = document.querySelector(".feedback-from");
var emailValue = document.querySelector(".feedback-email");
var phoneValue = document.querySelector(".feedback-phone");
var feedbackValue = document.querySelector(".feedback-content");

var nameField = document.querySelector("#nameinput");
var emailField = document.querySelector("#emailinput");
var phoneField = document.querySelector("#phoneinput");
var feedbackField = document.querySelector("#feedback");

var form = document.querySelector(".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");

/* add text to preview section */
function completePreview() {
   fromValue.textContent = nameField.value;
   emailValue.textContent = emailField.value;
   phoneValue.textContent = phoneField.value;
   feedbackValue.textContent =  feedbackField.value;
   feedbackPreview.className = "feedback-preview show";
   if (form.checkValidity() === true) {
      submitButton.className = "submitbutton show";
   }
}

// A function to format text to look like a phone number
function phoneFormat(input){
   // Strip all characters from the input except digits
   input = input.replace(/\D/g,'');
   
   // Trim the remaining input to ten characters, to preserve phone number format
   input = input.substring(0,10);
   
   // Based upon the length of the string, we add formatting as necessary
   var size = input.length;
   if(size == 0){
      input = input;
   }else if(size < 4){
      input = '('+input;
   }else if(size < 7){
      input = '('+input.substring(0,3)+') '+input.substring(3,6);
   }else{
      input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
   }
   return input; 
}

/* create event listener for changes to from */
form.addEventListener("change", completePreview, false); 

document.getElementById('phoneinput').addEventListener('keyup',function(evt){
   var phoneNumber = document.getElementById('phoneinput');
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   phoneNumber.value = phoneFormat(phoneNumber.value);
});