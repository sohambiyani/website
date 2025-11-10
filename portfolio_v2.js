const button = document.querySelector(".hmmm .slider .btn");
const track = document.querySelector(".hmmm .slider .track");
const group = document.querySelectorAll(".hmmm .slider .group");
const circles = document.querySelectorAll(".hmmm .circle");

const clone = group[0].cloneNode(true);
track.append(clone);

let i = 0;
const n = group.length;

function updateCircle(i) {
    circles.forEach(circle => circle.classList.remove("active"));
    circles[i].classList.add("active");
}
updateCircle(0);
button.addEventListener('click', function() {
    i++;
    track.style.transform = `translateX(-${i * 100}%)`;
    track.style.transition = "transform 0.5s ease-in-out";

    if(i === n) {
        updateCircle(0);
        setTimeout(() => {
            i = 0;
            track.style.transform = `translateX(0%)`;
            track.style.transition = "none";
        }, 500);
    } else {
        updateCircle(i);
    }
});

console.log("script loaded");
button.addEventListener('click' , () => {
    console.log("button clicked!");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('animate');
        }
    });
});

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => observer.observe(cell));
const headers = document.querySelectorAll('.skillz h2, .projectz h2, .hmmm h2, .contact h2');
headers.forEach((header) => observer.observe(header));