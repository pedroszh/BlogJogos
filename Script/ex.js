const btns = document.querySelectorAll('.xy');
const slides = document.querySelectorAll('.video-s');
const x = document.querySelectorAll('.jg');

var sliderNav = function(manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  x.forEach((x) => {
    x.classList.remove('active');
  });

  btns[manual].classList.add('active');
  slides[manual].classList.add('active');
  x[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
