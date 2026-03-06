fetch("/visitor-count")
.then(res => res.json())
.then(data => {
document.getElementById("visitor-count").innerText = data.count;
});

const text = "QA Engineer | Automation Tester | Selenium Specialist";

let i = 0;

function type(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(type,50);

}

}

type();

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick = function(){

window.scrollTo({top:0,behavior:"smooth"});

};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
let current = "";
sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
if (pageYOffset >= sectionTop) {
current = section.getAttribute("id");
}
});
navLinks.forEach(a => {
a.classList.remove("active");
if (a.getAttribute("href") === "#" + current) {
a.classList.add("active");
}
});
});