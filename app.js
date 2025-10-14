// Q1
// Answer
// let colors = ["#ff0000","#00d100","#adff2f","#000000","#0000ff"];
// let index = 0;
// let btn = document.querySelector("#btn");
// let body = document.querySelector("body")

// btn.addEventListener("click" ,() =>{
// let index = Math.floor(Math.random() * colors.length)
// let cahngecolors = colors[index]
// body.style.backgroundColor = cahngecolors


// })



// Q2
// Answer
// let toggle = document.querySelector("#myToggle");
// let body = document.querySelector("body");
// let h1 = document.querySelector("h1");


// toggle.addEventListener("change" , () =>{
// if(toggle.checked){
// body.style.backgroundColor = "black"
// h1.style.color = "white";
// }
// else{
// body.style.backgroundColor = "white"
// h1.style.color = "black";
// }
// })


// Q3
// Answer
// let hide = document.querySelector("#btn-hide");
// let h1 = document.querySelector("h1")
// hide.addEventListener("click" , ()=>{
// h1.style.display = "none";
// })



// Q4
// Answer
// let spn    = document.querySelector("#spn");
// let increasebtn = document.querySelector("#increase-plus");
// let decreasebtn = document.querySelector("#decrease-minus");
// let count = 0;
// increasebtn.addEventListener("click" , ()=>{
// spn.textContent = count++



// })
// decreasebtn.addEventListener("click" , () =>{

// spn.textContent = count-- 

    
// })



// Q5
// Answer

// const btn = document.querySelector("#btn");
// btn.addEventListener("click" , ()=>{
// btn.disabled = true;
// })



// Q6
// Answer
// let keys = document.querySelector("#keys");
// let spn = document.querySelector("#spn");
// keys.addEventListener("keydown", (dets)=>{
// if(dets.key === " "){
// spn.textContent = "Sapce"

// }else{
//  spn.textContent = dets.key   
// }
// })



// Q7
// Answer
// let  input = document.querySelector("#password-inp");
// let spn  = document.querySelector("#password-spn");
// let form = document.querySelector("#form");
// form.addEventListener("input", function(){
// if(input.value.length >= 10){
//   spn.innerHTML = "Strong password"
//   spn.style.color = "green";
// }else{
// spn.innerHTML = "Weak password!";
// spn.style.color = "red";
// }
// })



// Q8
// Answer

// let input = document.querySelector("#key-input");
// let spn = document.querySelector("#spn");
// input.addEventListener("keydown" , (dats) =>{
// if(dats.key === "Enter"){
// alert("Your form submited")

// }else{
// spn.textContent = dats.key


// }
// })


// Q9
// Answer
// let input = document.querySelector("#key-input");
// input.addEventListener("keyup" , function(){
// this.value = this.value.toUpperCase();    


// })






// Q10
// Answer
// let arr = ["spam","test"];
// let form = document.querySelector("form");
//  let input = document.querySelector("#input");
//  let btn = documet.querySelector("#btn"); 
//  form.addEventListener("submit", ()=>{
// if(btn === "submit"){
// alert("your form is submited");
// }
// else{
// alert("your form is not submited");  
// }
// })




// Q11
// Answer
// const countryCities = {
//   "Pakistan": ["Karachi", "Lahore", "Islamabad"],
//   "India": ["Delhi", "Mumbai", "Bangalore"],
//   "Usa": ["New York", "Los Angeles", "Chicago"],
// };

// let country = document.querySelector("#selectcountry");
// let cite = document.querySelector("#selectcite");
// let option = document.querySelectorAll("option");


// for(country.value in countryCities){
// country.addEventListener("change" , ()=>{
// cite.value = country;
// cite.textContent = country;
// country.appendChild("option");

// })
// }






