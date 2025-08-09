document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links');
    const link = document.querySelectorAll('.link');

    navToggle.addEventListener('click', function() {
        links.classList.toggle('show-links');
        
    });

    link.forEach(item => {
        item.addEventListener('click', function() {
            links.classList.remove('show-links');
        });
    });
});