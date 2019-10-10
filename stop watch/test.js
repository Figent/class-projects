$(document).ready(function(){
  $("#update").click(function() {
    var count = 0;
    var innterval = setInterval(function() {
      if (count == 100){
        clearInterval(innterval);
      count++;
      $("#counter").html("My current count is: " + innterval + "%")};
    }, 1000);
      
  });

});


