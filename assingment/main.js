var cars = ["volvo", "Toyota", "BMW", "Mercedes", "Audi"];

var type = cars[Math.floor(Math.random()*cars.length)];

console.log(type);

//Part 2
if(type == "BMW"){

    document.write("BMW Match");

}else {

    document.write("Not BMW Match");
};

document.write("........");
//Part 3
if(type == "BMW" || type == "Audi"){

    document.write("Pure German Match");
    

}else {

    document.write("Not Pure German Match");
    
};

document.write("........");

//Part 4

var pos = cars.indexOf("Mercedes");

document.write(pos);

document.write(".......");



//Part 5
var len = cars.length;
document.write(len);