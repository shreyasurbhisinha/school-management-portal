// script.js

// Example script to handle form submissions
document.addEventListener('DOMContentLoaded', function () {
    // Handle student class form submission
    const classForm = document.getElementById('class-form');
    if (classForm) {
        classForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Class added successfully!');
            // Here you would handle the form submission, e.g., send data to a server
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message sent successfully!');
            // Here you would handle the form submission, e.g., send data to a server
        });
    }
});
