const buttons = document.querySelectorAll(".details-button");
const details  = document.querySelectorAll(".progams-details");



buttons.forEach( function(button) {
  
  button.addEventListener("click" , function() {

    console.log(button.dataset.target + " was clicked!");

    //hide all details divs
    details.forEach(function(item) {
      item.hidden = true;
    });

    //find and show the relevant program details
    const target = button.dataset.target;
    document.getElementById(target).hidden = false;
  });

});