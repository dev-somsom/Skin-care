// fade-in //
const sections =
document.querySelectorAll(".fade-in");

const observer =
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
sections.forEach(section => {
    observer.observe(section);
});


//navbar
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});

document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }

});

// Testimonials Slider 
const track = document.querySelector(".review-track");
const cards = document.querySelectorAll(".reviews-card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentReview = 0;

if (track && nextBtn && prevBtn && cards.length > 0) {

    function updateSlider() {
        track.style.transform = `translateX(-${currentReview * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {

        currentReview++;

        if (currentReview >= cards.length) {
            currentReview = 0;
        }

        updateSlider();

    });

    prevBtn.addEventListener("click", () => {

        currentReview--;

        if (currentReview < 0) {
            currentReview = cards.length - 1;
        }

        updateSlider();

    });

}