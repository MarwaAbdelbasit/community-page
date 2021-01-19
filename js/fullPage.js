var sliderImgs = Array.from(document.querySelectorAll('.sliderImgs img')),
    slidersCount = sliderImgs.length,
    currentSlide = 1;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'paginationUl');

for(var i = 0; i < slidersCount; i++) {
  var paginationItem = document.createElement('li');
  paginationItem.setAttribute('data-index', i);
  paginationElement.appendChild(paginationItem);
}

var indicators = document.getElementById('indicators');
indicators.appendChild(paginationElement);

var paginationBullets = Array.from(document.querySelectorAll('#paginationUl li'));

for(var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function() {
    currentSlide = parseInt(this.getAttribute('data-index'));
    // console.log("currentSlide from for loop: " + currentSlide);
    checker();
  }
}

checker();

function checker() {
  removeActive();
  sliderImgs[currentSlide].classList.add('active');
  paginationBullets[currentSlide].classList.add('active');
  // console.log("currentSlide from checker: " + currentSlide);
}

function removeActive() {

  sliderImgs.forEach(function(img) {
    img.classList.remove('active');
  });

  paginationBullets.forEach(function(bullet) {
    bullet.classList.remove('active');
  });
}
