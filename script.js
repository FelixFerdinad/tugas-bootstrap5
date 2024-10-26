// Function to add 'animate__animated' class when elements are loaded
function addAnimationOnLoad() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    animatedElements.forEach((element) => {
        // Add animation classes
        element.classList.add('animate__animated');
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;

    // Display a success message
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-4 animate__animated animate__fadeIn';
    successMessage.innerText = 'Your message has been sent successfully!';
    form.appendChild(successMessage);

    // Reset the form after a delay
    setTimeout(() => {
        form.reset();
        successMessage.remove();
    }, 3000);
}

// Run animation function on page load
document.addEventListener('DOMContentLoaded', addAnimationOnLoad);

// Event listener for the form
document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);
