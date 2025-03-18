// Toggle Menu
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

// About Us Counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const speed = target / 100; // Adjust speed

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

// Projects
// Projects
const projects = {
    commercial: [
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 7.jpg',      
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 6.webp',
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 5.jpg'
    ],
    residential: [
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 5.jpg',
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 7.jpg',
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 6.webp'        
    ],
    retail: [
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 6.webp',
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 5.jpg',  
        'C:\Users\bhavi\OneDrive\Desktop\dkpatil\building 7.jpg'
    ]
};

// Descriptions for each project category
const projectDescriptions = {
    commercial: [
        "This is a commercial project that showcases modern architecture and innovative design.",
        "This commercial building features sustainable materials and energy-efficient systems.",
        "A state-of-the-art commercial space designed for functionality and aesthetics."
    ],
    residential: [
        "This residential project highlights cozy living spaces with contemporary design.",
        "A beautiful home that combines comfort with modern amenities.",
        "This project focuses on family-friendly layouts and outdoor spaces."
    ],
    retail: [
        "A retail space designed to enhance customer experience and engagement.",
        "This project features an open layout with ample natural light.",
        "A modern retail environment that promotes brand visibility and accessibility."
    ]
};

let currentCategory = 'commercial';
let currentIndex = 0;
let interval;

const projectShowcase = document.getElementById('projectShowcase');

function updateShowcase() {
    projectShowcase.innerHTML = '';
    const projectImages = projects[currentCategory];
    const descriptions = projectDescriptions[currentCategory];

    // Create a project item for the current index
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    projectDiv.style.display = 'flex'; // Use flexbox for layout

    projectDiv.innerHTML = `
        <div class="project-image">
            <img src="${projectImages[currentIndex]}" alt="${currentCategory} Project">
        </div>
        <div class="project-description">
            <h2>${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Project ${currentIndex + 1}</h2>
            <p>${descriptions[currentIndex]}</p>
        </div>
    `;
    projectShowcase.appendChild(projectDiv);
}

function startAutoScroll() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % projects[currentCategory].length;
        updateShowcase();
    }, 3000);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        currentCategory = card.getAttribute('data-category');
        currentIndex = 0; // Reset index for the new category
        updateShowcase();
        clearInterval(interval); // Stop auto-scrolling
        startAutoScroll(); // Start auto-scrolling for the new category
    });
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects[currentCategory].length) % projects[currentCategory].length;
        updateShowcase();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects[currentCategory].length;
    updateShowcase();
});

// Initialize the showcase
updateShowcase();
startAutoScroll();