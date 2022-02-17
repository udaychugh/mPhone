document.getElementById("nav-scroll").style.top = "-100px"; 

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
   
  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 100) {
    // I am using 'display' instead of 'top':
    document.getElementById("nav-scroll").style.top = "0px";
  } else {
    document.getElementById("nav-scroll").style.top = "-100px";
  }
}