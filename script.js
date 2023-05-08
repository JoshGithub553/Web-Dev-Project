const form = document.querySelector('.contactForm form'); // Selects the form element as the class is contactForm and the form is the first child of the class
form.addEventListener('submit', (event) => { // Adds an event listener to the form element for the submit button
  event.preventDefault(); // Prevents the default action of the submit button
  const message = document.createElement('p'); // Creates a new paragraph element
  message.textContent = 'Form submitted! We will get back to you as soon as possible';  // Adds text to the paragraph element
  form.appendChild(message); // Appends the paragraph element to the form element
});

// This code adds the message 'Form submitted! We will get back to you as soon as possible' to the contact us page when the submit button is clicked