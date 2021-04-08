var scrollButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollButton.addEventListener("click",()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
