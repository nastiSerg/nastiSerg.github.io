/*для скролла кнопки вниз*/
document.getElementById('scrollBtn').addEventListener('click', function() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  
/*для слайда изображений сверху*/ 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000;
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
setInterval(changeSlide, slideInterval);

/*для заявки*/
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
 
  /* Здесь будет код для отправки данных на сервер, 
  когда я научусь такое писать */
 
  alert('Сообщение отправлено!');
  this.reset();
});

/*слайдер для программ по стрелочке*/ 
let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slides img').length - 1;
    }
    showSlide();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slides img').length) {
        slideIndex = 0;
    }
    showSlide();
}

showSlide();
