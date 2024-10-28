// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent
         = 'Dark Mode';
    }
});

// Sample Upcoming Appointments 
const appointments = [
    'Dr. Smith - 15th Oct 2024, 10:00 AM',
    'Dr. Johnson - 20th Oct 2024, 2:00 PM',
];

const appointmentList = document.getElementById('appointmentList');

// Dynamically display upcoming appointments
appointments.forEach(appointment => {
    const li = document.createElement('li');
    li.textContent = appointment;
    appointmentList.appendChild(li);
});

// Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    formResponse.textContent = `Thank you, ${name}. We have received your message!`;
    contactForm.reset();  // Clear the form after submission
});
