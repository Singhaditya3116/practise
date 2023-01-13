greet();
//aditya(); // error beacuse function expression does not get hosited;

function greet() //this function definition get hoisted upward
{
    console.log("hello world");
}

var aditya = function(){
    console.log("Hello Aditya");
}


aditya(); //this will work because,function is defined earlier.