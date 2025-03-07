document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message