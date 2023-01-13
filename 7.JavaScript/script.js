var a=1;

function b(){
  a=10;
  return;

  function a(){

  }
}

b();
console.log(a);


var timer=10;


function countDown()
{
  console.log(timer);
  timer--;

  if(timer <= 1)
  {
    clearInterval(id);
  }
}

var id = setInterval(countDown);