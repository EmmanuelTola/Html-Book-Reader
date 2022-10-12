			// Initialize Variables

	// Open Side Navigation 
	    function openNav() {
  document.getElementById("mySidenav").style.width = "76%";
 document.getElementById("homePage"); 

  var nodes = document.getElementsByTagName("li");

for (var i = 0, len = nodes.length; i != len; ++i) {
    document.getElementById ('sideNav').appendChild(nodes[75]);
    document.getElementById ('mySidenav').style.top = "-15%";
    
}
}

// Close Side Navigation 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
