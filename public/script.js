// dark mode

function toggleDarkMode(){
document.body.classList.toggle("dark");
}


// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});
});


// hamburger menu

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// toggle menu
hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

document.body.classList.toggle("menu-open");

});

// close menu when clicking link

document.querySelectorAll("#nav-links a").forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

document.body.classList.remove("menu-open");

});

});

// close menu when clicking outside

document.addEventListener("click", function(event){

if(!navLinks.contains(event.target) && !hamburger.contains(event.target)){

navLinks.classList.remove("active");

document.body.classList.remove("menu-open");

}

});

// visitor counter

let count = localStorage.getItem("visits");

if(!count){
count = 1;
}else{
count++;
}

localStorage.setItem("visits",count);

document.addEventListener("DOMContentLoaded",()=>{

const counter = document.getElementById("visitor-count");

if(counter){
counter.innerText = count;
}

});