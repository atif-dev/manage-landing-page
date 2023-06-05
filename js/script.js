const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const validateEmail = (inputText) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        // alert("Valid email address!");
        
        document.form.email.focus();
    return true;
    }else{
    // alert("You have entered an invalid email address!");
    let email_exp = document.querySelector(".email-exp");
    let email_border = document.querySelector(".first-elm");
    let email_field = document.querySelector("#email-field");
        email_field.classList.add('your-class');
        email_border.style.borderColor = "red";
        email_exp.innerHTML = "Please insert a valid email";
        document.form.text.focus();
        return false;
        }
    }
// carousel for testimonial
// variables
const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelectorAll('.carousel-item');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;
// testimonial card
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < carouselItem.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}
// progress circles
function circleBG () {
	removeActive();
	circles[currentIndex].classList.add('show');
}
function removeActive() {
	circles.forEach((circle) => {
		circle.classList.remove('show')
	})
}

function cardCircle() {
	nextSlide();
	circleBG();
}
setInterval(cardCircle, 3500);
