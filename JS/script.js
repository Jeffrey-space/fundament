function dropwdownMenu() {
  var x = document.getElementById("nav-list");
  if (x.className === "nav-items") {
    x.className += " responsive";
  } else {
    x.className = "nav-items";
  }
}