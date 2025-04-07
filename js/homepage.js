

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Initialize the slider
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');

// Next button event listener
nextButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
});

// Prev button event listener
prevButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
});

// Dot event listeners
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  });
});

// arrival 
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.style.scrollBehavior = "auto";
  scrollContainer.scrollLeft += evt.deltaY;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 300;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 300;
});
// arrival closing


//footer 
//   var img=document.getElementById("toggleBtn");
//   document.getElementById("toggleBtn").addEventListener("click", function() {
//     let content = document.getElementById("content");

//     content.style.display = (content.style.display === "none") ? "block" : "none";
//     img.style.transform = (img.style.transform === "rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)";
// });

var img = document.getElementById("toggleBtn");
var content = document.getElementById("content");
img.addEventListener("click", function () {
  content.style.display = (content.style.display === "none") ? "block" : "none";
  img.style.transform = (img.style.transform === "rotate(0deg)") ? "rotate(180deg)" : "rotate(0deg)";
});



//feedback

const sliderfeedback = document.getElementById("slider-feedback");
const slidesfeed = document.querySelectorAll(".slide-feed");
const pagination = document.getElementById("pagination");

slidesfeed.forEach((_, i) => {
  const dott = document.createElement("span");
  dott.classList.add("dott");  // Fixed class name
  if (i === 0) dott.classList.add("actives");  // Fixed active class
  dott.addEventListener("click", () => goToSlide(i));
  pagination.appendChild(dott);
});

const dotss = document.querySelectorAll(".dott");  // Fixed selector

function updateDots(index) {
  dotss.forEach(dot => dot.classList.remove("actives"));
  dotss[index].classList.add("actives");
}

function goToSlide(index) {
  sliderfeedback.scrollTo({
    left: index * sliderfeedback.clientWidth,
    behavior: "smooth"
  });
}

sliderfeedback.addEventListener("scroll", () => {
  let index = Math.round(sliderfeedback.scrollLeft / sliderfeedback.clientWidth);
  updateDots(index);
});


//limelight 

document.querySelectorAll(".love-icon").forEach(icon => {
  icon.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// menu bar list
function setActiveMenu(selectedTab) {
  document.querySelectorAll('.menu-list').forEach(menu => {
    menu.classList.remove('active_menu');
  });
  selectedTab.classList.add('active_menu');
}
function setActiveMenuList(selectedTab) {
  document.querySelectorAll('.menu-list').forEach(menu => {
    menu.classList.remove('active-one');
  });
  selectedTab.classList.add('active-one');
}

function setActiveMenuList(selectedTab) {
  document.querySelectorAll('.menu-list').forEach(menu => {
    menu.classList.remove('two');
  });
  selectedTab.classList.add('two');
}

// const activePage = window.Location.pathname;
// const NavLinks = document.querySelectorAll('nav a').forEach(link => {
//   if(link.href.includes(`${activePage}`)){
//     link.classList.add('active')
//   }
// })







