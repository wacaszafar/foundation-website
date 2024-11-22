// Update current date in the top bar
document.addEventListener('DOMContentLoaded', function() {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = currentDate;
});

// Sticky navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-sticky');
    } else {
        navbar.classList.remove('navbar-sticky');
    }
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Breaking news ticker animation
const breakingNews = document.querySelector('.breaking-news-content');
if (breakingNews) {
    breakingNews.addEventListener('mouseover', function() {
        this.stop();
    });
    
    breakingNews.addEventListener('mouseout', function() {
        this.start();
    });
}
