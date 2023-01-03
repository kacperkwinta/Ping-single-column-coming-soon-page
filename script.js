"use strict";

console.log(`hi mom`);

/*
Receive an error message when the form is submitted if:
The input field is empty
The email address is not formatted correctly
*/

// selecting elements
const inputEmail = document.querySelector(".input-email");
const inputSubmit = document.querySelector(".input-submit");
const errorParagraph = document.querySelector(".error");

inputSubmit.addEventListener("click", function () {
  if (inputEmail.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    setTimeout(() => {
      inputEmail.value = "";
      inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";

      errorParagraph.style.color = "hsl(223, 87%, 63%)";
      errorParagraph.textContent =
        "Thank you for subscription! We are in touch 😉";
    }, 100);
  } else {
    setTimeout(() => {
      inputEmail.style.border = "1px solid hsl(354, 100%, 66%)";
      errorParagraph.style.color = "hsl(354, 100%, 66%)";
      errorParagraph.textContent =
        "Whoops 🙄 please write your email correctly...";
    }, 100);
  }
});
