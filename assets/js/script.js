// Custom JS for interactive elements (e.g., smooth scrolling, animations)
document.addEventListener('DOMContentLoaded', () => {
    // Example of scroll animation
    const btn = document.querySelector('.btn-primary');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    });
});
