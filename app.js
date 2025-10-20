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


// Q12
// Answer
// const fullnameRe = /^(?=.{8,}$)[A-Za-zÀ-ÖØ-öø-ÿ]+([ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/u;
// const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
// const passwordRe = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]).*$/;
// let form = document.querySelector("#userform");
// let inputname = document.querySelector("#inputname");
// let inputemail = document.querySelector("#inputemail");
// let inputpassword = document.querySelector("#inputpassword");


// form.addEventListener("submit" , function(event){
// event.preventDefault();
// if(!fullnameRe.test(inputname.value)){
//   Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Fullname is incorrect only for 8 corrector",
// });
// }else if(!emailRe.test(inputemail.value)){
//  Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Email is incorrect",
// });
// }else if(!passwordRe.test(inputpassword.value)){
//  Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Password is incorrect only for 8 corrector spaceil corrector is messing ! $ % @ #",
// });
// } else{
//    Swal.fire({
//   title: "Good job!",
//   text: "your form is submited",
//   icon: "success"
// });
// }
// })



// Q13
// Answer
// let toggle = document.querySelector(".toggle-icon");
// let input = document.querySelector("#myPassword");

// toggle.addEventListener("click" , ()=>{
// if(input.type === "password"){
// input.type = "text"
// }else{
// input.type = "password";
// }
// })


// Q14
// Answer

// let color = document.querySelector("#inputcolor");
// let box = document.querySelector("#box");
// let h1 = document.querySelector("#haed");
// color.addEventListener("change" , (event)=>{
//     event.preventDefault();
// box.style.backgroundColor = color.value;
// h1.style.backgroundColor = color.value;

// })






// Q15
// Answer
//  let form = document.querySelector("#submit-form");
//  let input  = document.querySelector("#terms");
// let btn = document.querySelector("#form-btn");
// input.addEventListener("click" ,()=>{
// if(input.checked){
//  btn.disabled = true;
// btn.style.backgroundColor = " #05a9af";
// btn.style.cursor = "pointer";

// }else{
//  btn.disabled = false;
// btn.style.backgroundColor = "rgb(219, 217, 217)";
// btn.style.cursor = "not-allowed";
// }

// })





// Q16
// Answer
// let img = document.querySelector("img");
// img.addEventListener("mouseover" , ()=>{
// img.style.width = "900px";
// img.style.height = "800px";
// img.style.cursor = "pointer";

// })
// img.addEventListener("mouseout", ()=>{
// img.style.width = "400px";
// img.style.height = "350px";
// img.style.cursor = "pointer";

// })



// Q17
// Answer
// let btn = document.querySelector("#backToTop");
// window.addEventListener("scroll" ,()=>{
// if(window.scrollY > 300){
//     btn.disabled = true;
// btn.style.display =  "block";
// }else{
// btn.disabled = false;
// btn.style.display =  "none";
// }    
// })



// Q18
// Answer
// let input = document.querySelector("#input-user");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click" , ()=>{
// localStorage.setItem("input" , input.value);
// })

// Q19
// Answer
// let div = document.querySelector("#container");
// let body = document.querySelector("body");
// document.addEventListener("click" ,(event)=> {
// if(div.contains(event.target)){  
// return
// }else{
// div.style.display = "none";
// }

// })






