document.addEventListener("scroll", conditionalHideArrow);
function conditionalHideArrow() {
  var elem = document.getElementById("aboutme");
  if(isInViewport(elem)) {
    console.log(document.getElementById("arrow").style.display);
    document.getElementById("arrow").style.color = "rgb(248, 240, 227)";
  }
  else {
  document.getElementById("arrow").style.color = "black";
  }
}

function isInViewport (elem) {
    var bound = elem.getBoundingClientRect();
    return bound.top <= (window.innerHeight || document.documentElement.clientHeight);
};
