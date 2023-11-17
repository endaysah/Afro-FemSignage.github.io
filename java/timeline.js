console.log("I'm working"); 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

/* page 2 _ image expand on click */

window.onload = function(){
  $(".img-two").click(changeSize);
}

function changeSize (){
  $(".img-two").css("height", "500px");
  $(".img-two").css("width", "500px");
  $(".img-two").css("width", "500px");
  $(".img-two").css("background", "purple");
}