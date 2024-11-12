document.addEventListener("DOMContentLoaded", function () {
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress');
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const progressWidth = bar.getAttribute('data-progress');

            if (barPosition < windowHeight - 50) { // Add buffer for when it becomes visible
                bar.style.width = progressWidth + '%';
            }
        });
    };

    // Run animation on scroll
    window.addEventListener('scroll', animateProgressBars);

    // Run animation on load in case elements are already in view
    animateProgressBars();
});
