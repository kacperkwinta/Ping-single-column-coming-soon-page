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
const emailStr = inputEmail.value;

// check email
const checkEmail = function (emailStr) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

inputSubmit.addEventListener("click", function () {
  if (inputEmail.value === "") {
    setTimeout(() => {
      errorParagraph.style.color = "hsl(354, 100%, 66%)";
      errorParagraph.textContent =
        "Whoops 🙄 please write your email correctly...";
    }, 100);
  } else {
    setTimeout(() => {
      inputEmail.value = "";
      errorParagraph.style.color = "hsl(223, 87%, 63%)";
      errorParagraph.textContent =
        "Thank you for subscription! We are in touch 😉";
    }, 100);
  }
});
