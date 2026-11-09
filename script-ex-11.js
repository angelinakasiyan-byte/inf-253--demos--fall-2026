const buttons = document.querySelectorAll(".details-button");
const details  = document.querySelectorAll(".progams-details");



buttons.forEach( function(button) {
  console.log(buttons);

    console.log(button.dataset.target + " was clicked!");

     button.addEventListener("click" , function() {

    //hide all details divs
    details.forEach(function(item) {
      item.hidden = true;
    });

    //find and show the relevant program details
    const target = button.dataset.target;
    document.getElementById(target).hidden = false;
  });

});