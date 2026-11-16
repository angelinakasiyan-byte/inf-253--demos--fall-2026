const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".progams-details");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const target = button.dataset.target;

    // Hide all details divs first
    details.forEach(function (item) {
      item.hidden = true;
    });

    // Show the specific program details div that matches data-target
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.hidden = false;
    }
  });
});

// 2. Handle the Registration Form submission
const form = document.querySelector("#registration-form");
const confirmation = document.querySelector("#confirmation-message");
const confirmName = document.querySelector("#confirm-name");

if (form && confirmation && confirmName) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stops the page from reloading

    // Get the name typed into the input field and put it into the <span>
    const name = document.querySelector("#registration-name").value;
    confirmName.textContent = name;

    // Reveal the hidden confirmation <div>
    confirmation.hidden = false;

    // Clear the form fields
    form.reset();
  });
}