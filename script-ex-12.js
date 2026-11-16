const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".progams-details");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const target = button.dataset.target;
    console.log(target + " was clicked!");

    // Hide all details divs
    details.forEach(function (item) {
      item.hidden = true;
    });

    // Find and show the relevant program details
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.hidden = false;
    }
  });
});

const form = document.querySelector("#registration-form");
const confirmation = document.querySelector("#confirmation-message");

if (form & confirmation) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.querySelector("#registration-name").value;
    const program = document.querySelector("#registration-program").value;
    const mode = document.querySelector('input[name="attendanceMode"]:checked').value;

    const message = `Thank you, ${name}, for registering for the ${program} program (${mode})!`;

    confirmation.textContent = message;
    confirmation.hidden = false; // Show the confirmation message
    form.reset(); // Optional: clears the form after submission
  });