
function sayHello() {
  alert("Hello Buddy");
}

var helloButton = document.getElementById("btn");
helloButton.addEventListener("click",sayHello );

document.addEventListener('keyup',function(){
  console.log("Key Pressed");
});