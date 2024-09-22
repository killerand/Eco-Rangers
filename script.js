document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-button');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
// Function to handle dynamic adjustments based on screen size
function adjustLayout() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Example 1: Adjusting font size dynamically
    if (screenWidth < 600) {
        document.documentElement.style.fontSize = "50%"; // Smaller font size for small screens
    } else if (screenWidth < 1024) {
        document.documentElement.style.fontSize = "55%"; // Medium font size for tablets
    } else {
        document.documentElement.style.fontSize = "62.5%"; // Default font size for larger screens
    }

    // Example 2: Adjusting element heights or widths
    const header = document.querySelector('header');
    if (header) {
        if (screenWidth < 768) {
            header.style.height = '70px'; // Smaller height for mobile devices
        } else {
            header.style.height = '100px'; // Default height for larger devices
        }
    }

    // Example 3: Change image size dynamically based on the screen
    const homeImg = document.querySelector('.home-img img');
    if (homeImg) {
        if (screenWidth < 768) {
            homeImg.style.width = '100%'; // Full width on small screens
        } else {
            homeImg.style.width = '50%'; // 50% width on larger screens
        }
    }

    // Example 4: Adjusting padding or margins
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (screenWidth < 768) {
            section.style.padding = '1rem 1rem'; // Smaller padding for mobile
        } else {
            section.style.padding = '2rem 5rem'; // Larger padding for bigger screens
        }
    });
}

// Run the function on page load
window.onload = adjustLayout;

// Run the function every time the window is resized
window.onresize = adjustLayout;
