var i, timer, divide;

i = 00;
divide = 100;

function start(){
    timer = self.setInterval("increment()", (1000/divide))
}

function increment(){
    i++;
    document.getElementById("timer_out").innerHTML = (i/divide);
}

function stop(){
    clearInterval(timer);
    timer = null;
}
function reset(){
    stop();
    i = 00;
    document.getElementById("timer_out").innerHTML = (i/divide);
}
