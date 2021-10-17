const imgSlider = document.querySelectorAll('.slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const imgArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
let imgIndex = 0;
let slideTimer;

function nextImg() {
  clearTimeout(slideTimer);

  if (imgIndex > imgSlider.length - 1) {
    imgIndex = 0;
  }

  imgSlider.forEach((img) => {
    img.classList.remove('active');
  });

  imgSlider[imgIndex].classList.add('active');
  imgIndex++;

  slideTimer = setTimeout(nextImg, 2000);
}

prev.addEventListener('click', () => {
  clearTimeout(slideTimer);

  if (imgIndex <= 0) {
    imgIndex = imgArr.length;
  }

  imgSlider.forEach((img) => {
    img.classList.remove('active');
  });

  imgIndex--;
  imgSlider[imgIndex].classList.add('active');

  slideTimer = setTimeout(nextImg, 2000);
});

next.addEventListener('click', nextImg);

nextImg();
