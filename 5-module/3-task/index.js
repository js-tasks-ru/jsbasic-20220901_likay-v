function initCarousel() {
  let right = document.querySelector('.carousel__arrow_right');
  let left = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let index = 0;

  if(index == 0){
    left.style.display = 'none';
  }
  
  right.addEventListener('click',() => {
    index++;
    let step = carousel.offsetWidth * -index;
    carousel.style.transform = 'translateX(' + step + 'px)';
    checkV(index, right, left, carousel);
  })

  left.addEventListener('click',() => {
    index--;
    let step = carousel.offsetWidth * -index;
    carousel.style.transform = 'translateX(' + step + 'px)';
    checkV(index, right, left, carousel);
  })

}

function checkV(index, right, left, carousel){
  
    if(index == carousel.childElementCount - 1){
      right.style.display = 'none';
    } else {
      right.style.display = '';
    }  
  
    if(index == 0){
      left.style.display = 'none';
    } else {
      left.style.display = '';
    }
  

}
