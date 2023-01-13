
document.querySelector("#grandparent")
.addEventListener("click",()=>{
  console.log("Grandparent clicked");
},true)

document.querySelector("#parent")
.addEventListener("click",()=>{
  console.log("Parent clicked");
},false)

document.querySelector("#child")
.addEventListener("click",()=>{
  console.log("Child clicked");
},false)