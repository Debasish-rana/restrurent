let homes = document.getElementById("homes");
let foods = document.getElementById("foods");
let dishs = document.getElementById("dishs");
let tracko = document.getElementById("tracko");

homes.addEventListener("click",function(){
          homes.style.color="red";
          foods.style.color="white";
          dishs.style.color="white";
          tracko.style.color="white";
})

foods.addEventListener("click",function(){
          homes.style.color="white";
          foods.style.color="red";
          dishs.style.color="white";
          tracko.style.color="white";
})

dishs.addEventListener("click",function(){
          homes.style.color="white";
          foods.style.color="white";
          dishs.style.color="red";
          tracko.style.color="white";
})

tracko.addEventListener("click",function(){
          homes.style.color="white";
          foods.style.color="white";
          dishs.style.color="white";
          tracko.style.color="red";
})
let logbtn = document.getElementById("logbtn");

logbtn.addEventListener("click",function(){
          document.querySelector(".loginpage").style.display="block";
          
})

let logedin = document.getElementById("logedin");

logedin.addEventListener("click",function(){

let email = document.getElementById("name");
let pass = document.getElementById("pass");


if(email.value == "" || pass.value == ""){
   alert("Pleace enter email & password")
}
else{
          alert("you loged in succesfully")
          document.querySelector(".loginpage").style.display="none";
}
})