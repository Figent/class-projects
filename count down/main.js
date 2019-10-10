// Set the date we're counting down to
var countDownDate = new Date("oct 9, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var timedif = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timedif / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timedif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timedif % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timedif % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (timedif < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);