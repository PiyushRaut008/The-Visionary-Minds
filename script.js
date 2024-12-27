// Select the hamburger menu and navigation links
const navToggle = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation bar visibility and hamburger animation
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Slide navigation panel
    navToggle.classList.toggle('open'); // Transform hamburger into "X"
});

// Close navigation bar when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Close navigation
        navToggle.classList.remove('open');  // Reset hamburger
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const announcementText = document.querySelector(".announcement-text");
    const announcementPanel = document.querySelector(".announcement-panel");

    // Get the width of the text content
    const textWidth = announcementText.offsetWidth;
    const panelWidth = announcementPanel.offsetWidth;

    // Calculate animation duration (adjust speed as needed)
    const animationDuration = (textWidth + panelWidth) / 100; // Adjust the divisor for speed

    // Apply the calculated duration to the animation
    announcementText.style.animationDuration = `${animationDuration}s`;
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;

     // Select the arrow buttons
     const prevArrow = document.querySelector('.prev-arrow');
     const nextArrow = document.querySelector('.next-arrow');

    function showNextImage() {
        // Hide the current image
        images[currentIndex].classList.remove('visible');

        // Calculate the next index
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].classList.add('visible');
    }

    // Initial image visibility
    images[currentIndex].classList.add('visible');

    // Change images every 6 seconds (adjust as necessary)
    setInterval(showNextImage, 3000); // 6000ms = 6 seconds

     // Show previous image when left arrow is clicked
     prevArrow.addEventListener('click', () => {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('visible');
    });

    // Show next image when right arrow is clicked
    nextArrow.addEventListener('click', showNextImage);

});



