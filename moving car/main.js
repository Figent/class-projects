$(document).ready(function(){
    $( "#right" ).click(function() {
    $( "#block" ).animate({ "left": "+=50px" } );
    });
    
    $( "#left" ).click(function(){
    $( "#block" ).animate({ "left": "-=50px" });
    });

    $( "#up" ).click(function(){
    $( "#block" ).animate({ "top": "-=50px" });
    });

    $( "#down" ).click(function(){
    $( "#block" ).animate({ "top": "+=50px" });
    });

    $( "#right" ).click(function() {
    $( "#block" ).animate({ "left": "+=50px" } );
    });
    
    $( "#left" ).click(function(){
    $( "#block" ).animate({ "left": "-=50px" });
    });

    $( "#up" ).click(function(){
    $( "#block" ).animate({ "top": "-=50px" });
    });

    $( "#down" ).click(function(){
    $( "#block" ).animate({ "top": "+=50px" });
    });
});