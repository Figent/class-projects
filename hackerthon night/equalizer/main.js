$(document).ready(function(){
    setInterval(function(){

        function showColor(rd, pos, col){
            $("#t"+rd+" #p"+pos).css("background-color", col);
        };

        //get random ones
        for(i=1; i<=6; i++){
            var random = Math.floor((Math.random()*6)+1);
            console.log(random);
                if(i == random){
                    setInterval(showColor(random, 1, "blue"),100);
                    setInterval(showColor(random, 2, "red"),100);
                    setInterval(showColor(random, 3, "blue"),100);
                    setInterval(showColor(random, 4, "red"),100);
                    setInterval(showColor(random, 5, "blue"),100);
                    setInterval(showColor(random, 6, "red"),100);
                }else{
                    setInterval(showColor(random, 1, "red"),100);
                    setInterval(showColor(random, 2, "blue"),100);
                    setInterval(showColor(random, 3, "red"),100);
                    setInterval(showColor(random, 4, "blue"),100);
                    setInterval(showColor(random, 5, "red"),100);
                    setInterval(showColor(random, 6, "blue"),100);
                };
        };
    },300);
    
    
   
              
    
    
        
});
