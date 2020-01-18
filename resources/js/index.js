$(document).ready(function () {
$("button").click(function() {
   var id = this.id;
   if (id == "weather") {
     $("#info-title").text("What's the weather like?");
     $("#info").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
   }
   else if (id == "places"){
     $("#info-title").text("Places");
     $("#info").text("testing");
   }
   else if (id == "restaurants"){
     $("#info-title").text("Restaurants");
     $("#info").text("testing");
   }
})
})
