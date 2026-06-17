let currentSlideIndex = 0;
const slides = document.querySelectorAll('.project-square');

// Core Arrow Navigation Function
function moveSlide(direction) {
    if (slides.length === 0) return;
    
    // Hide current active slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Calculate next index (loops around seamlessly)
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Show new active slide
    slides[currentSlideIndex].classList.add('active');
}

// Touch/Swipe Gestures for Mobile Viewports
let touchStartX = 0;
let touchEndX = 0;
const sliderContainer = document.querySelector('.fullscreen-slider-container');

if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50; 
    if (touchStartX - touchEndX > swipeThreshold) {
        moveSlide(1);  
    } else if (touchEndX - touchStartX > swipeThreshold) {
        moveSlide(-1); 
    }
}


