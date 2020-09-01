function dropdownMenu() {
	const nav = document.getElementById("nav-list");
	if (nav.className === "nav-items") {
    	nav.className += " responsive";
  	} else {
   	 	nav.className = "nav-items";
  	}	
}

