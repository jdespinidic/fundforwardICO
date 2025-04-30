document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (mobileMenuToggle && mainNavUl) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavUl.classList.toggle('active');
        });
    }

    // Optional: Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNavUl.classList.contains('active')) {
                mainNavUl.classList.remove('active');
            }
        });
    });
});




// --- Email Form Validation --- 
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const emailInput = document.getElementById("email-input");
    const formMessage = document.getElementById("form-message");

    if (signupForm && emailInput && formMessage) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent actual form submission

            const email = emailInput.value.trim();
            formMessage.textContent = ""; // Clear previous messages
            formMessage.className = "form-message"; // Reset classes

            if (email === "") {
                formMessage.textContent = "Please enter your email address.";
                formMessage.classList.add("error");
                return;
            }

            // Basic email format validation
            const emailRegex = /^[^"]+@[^"]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.classList.add("error");
                return;
            }

            // Simulate successful submission (no backend)
            formMessage.textContent = "Thank you! You will be notified.";
            formMessage.classList.add("success");
            emailInput.value = ""; // Clear the input field

            // Note: In a real application, you would send the email to a backend server here.
        });
    }
});

