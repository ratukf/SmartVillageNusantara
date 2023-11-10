// load-components.js
document.addEventListener('DOMContentLoaded', function() {
    // Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar-container').innerHTML = data);

    // Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);
});
