// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
// 

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
}

const slideInImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  slideInImages.forEach(i => {
    // Slide in halfway through image
    const halfwayThroughImage = (window.scrollY + window.innerHeight) - 
      i.height / 2;
    
    // Slide out at bottom of image
    const imageBottom = i.offsetTop + i.height;
    const isHalfShown = halfwayThroughImage > i.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    if (isHalfShown && isNotScrolledPast) {
      i.classList.add('active');
    } else {
      i.classList.remove('active');
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
