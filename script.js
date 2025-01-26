// Select the hamburger menu and navigation links
const navToggle = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation bar visibility and hamburger animation
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Slide navigation panel
    navToggle.classList.toggle('open'); // Transform hamburger into "X"
});

// Close navigation bar when a liank is clicked
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

    // Change images every 3 seconds (adjust as necessary)
    setInterval(showNextImage, 3000); // 3000ms = 3 seconds

     // Show previous image when left arrow is clicked
     prevArrow.addEventListener('click', () => {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('visible');
    });

    // Show next image when right arrow is clicked
    nextArrow.addEventListener('click', showNextImage);

});

document.addEventListener("scroll", function () {
    const section = document.querySelector(".events-section");
    const offset = window.scrollY * 0.5;
    section.style.backgroundPositionY = `${offset}px`;
});

// Select all team groups
const teamGroups = document.querySelectorAll('.team-group');
let currentGroupIndex = 0;

// Function to show the next group
function showNextGroup() {
    // Hide all groups
    teamGroups.forEach(group => group.classList.remove('visible'));
    
    // Show the next group in sequence
    teamGroups[currentGroupIndex].classList.add('visible');
    
    // Update the index to point to the next group
    currentGroupIndex = (currentGroupIndex + 1) % teamGroups.length;
}

// Initially show the first group
showNextGroup();

// Change groups every 6 seconds
setInterval(showNextGroup, 6000); // 6000ms = 6 seconds
document.addEventListener("DOMContentLoaded", function () {
    const eventIcons = document.querySelectorAll('.event-icon');

    // Function to check if an element is in the viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // Trigger ray animation when the event icon enters the viewport
    function triggerRaysOnScroll() {
        eventIcons.forEach(icon => {
            if (isInViewport(icon) && !icon.classList.contains('ripple-active')) {
                icon.classList.add('ripple-active');
                // Optionally add some logic here to remove ripple after animation ends
                setTimeout(() => icon.classList.remove('ripple-active'), 1000);  // Adjust time to match animation duration
            }
        });
    }

    // Listen for scroll events to trigger rays when the element is in view
    window.addEventListener("scroll", triggerRaysOnScroll);

    // Run on page load in case the icons are already in the viewport
    triggerRaysOnScroll();
});


  
document.addEventListener("DOMContentLoaded", function () {
    const eventIcons = document.querySelectorAll('.event-icon');

    // Function to check if an element is in the viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger ray animation when the event icon enters the viewport
    function triggerRaysOnScroll() {
        eventIcons.forEach(icon => {
            if (isInViewport(icon) && !icon.classList.contains('ripple-active')) {
                icon.classList.add('ripple-active');
                setTimeout(() => icon.classList.remove('ripple-active'), 1000); // Adjust timing to match animation
            }
        });
    }

    // Listen for scroll events to trigger rays when the element is in view
    window.addEventListener("scroll", triggerRaysOnScroll);

    // Run on page load in case the icons are already in the viewport
    triggerRaysOnScroll();
});


