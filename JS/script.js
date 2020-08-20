function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.className === "nav-items") {
    x.className += " responsive";
  } else {
    x.className = "nav-items";
  }
}