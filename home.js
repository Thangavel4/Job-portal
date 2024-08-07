document.querySelectorAll('.scroll-section').forEach((section) => {
    const scrollContainer = section.querySelector('.scroll');
    const scrollIndicators = section.querySelectorAll('.scroll-indicators span');
    let currentIndex = 0;
    
    const scrollLeftButton = section.querySelector('#scroll-left');
    const scrollRightButton = section.querySelector('#scroll-right');

    scrollLeftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });

    scrollRightButton.addEventListener('click', () => {
        if (currentIndex < scrollIndicators.length - 1) {
            currentIndex++;
            updateScroll();
        }
    });

    function updateScroll() {
        const cardWidth = 320; // Match this to your actual card width + margin
        const scrollAmount = currentIndex * cardWidth;
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
        updateIndicators();
    }

    function updateIndicators() {
        scrollIndicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
});
