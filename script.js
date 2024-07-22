// scripts.js
// Add event listener to the "Learn More" button
document.querySelector('button').addEventListener('click', function() {
    // Scroll to the "About Me" section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add event listener to the navigation links
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevent default link behavior
      event.preventDefault();
      // Scroll to the corresponding section
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add event listener to the contact form submit button
  document.querySelector('#contact button[type="submit"]').addEventListener('click', function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Alert a success message
    alert('Thank you for contacting me!');
  });
  
  // Add event listener to the project images
  document.querySelectorAll('#projects img').forEach(function(image) {
    image.addEventListener('click', function() {
      // Open a modal window with the project details
      const modal = document.createElement('div');
      modal.innerHTML = `
        <h2>${image.alt}</h2>
        <p>${image.nextElementSibling.textContent}</p>
      `;
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.background = 'white';
      modal.style.padding = '20px';
      modal.style.border = '1px solid #ccc';
      modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      document.body.appendChild(modal);
    });
  });