const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".progams-details");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const target = button.dataset.target;

    details.forEach(function (item) {
      item.hidden = true;
    });

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
const confirmProgram = document.querySelector("#confirm-program");

if (form && confirmation && confirmName && confirmProgram) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements["name"].value;
    const programSelect = form.elements["program"];
    const program = programSelect.value || programSelect.options[programSelect.selectedIndex].text;

    confirmName.textContent = name;
    confirmProgram.textContent = program;

    confirmation.hidden = false;
    form.reset();
  });
}