// DOM elements
const emailInput = document.getElementById('email-input');
const errorEmailMessage = document.getElementById('email-error-message');
const submitBtn = document.getElementById('submit-btn');


const showMessage = (message, color) => {
    errorEmailMessage.textContent = message;
    errorEmailMessage.style.display='block';
    errorEmailMessage.style.color=color;
};

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
        showMessage('Please enter an email address', 'hsl(0, 100%, 63%)');
    } else if (!isValidEmail) {
        showMessage('Please provide a valid email address', 'hsl(0, 100%, 63%)');
    } else {
        showMessage('Email sent!', 'hsl(176, 68%, 64%)');
        emailInput.value = '';
    }
});