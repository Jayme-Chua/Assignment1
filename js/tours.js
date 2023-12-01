document.addEventListener('DOMContentLoaded', function () {
    // Check if form data is stored in local storage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
    // Display user greeting based on form submission
    const userGreeting = document.getElementById('userGreeting');
    if (storedUserData) {
      userGreeting.textContent = `Hi, ${storedUserData.name}!`;
    } else {
      userGreeting.textContent = 'Hi, Anonymous';
    }
  
    // Form submission event listener
    const tourForm = document.getElementById('tourForm');
    tourForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      // Perform basic validation (you can add more complex validation as needed)
      if (name && email) {
        // Store data in local storage
        const userData = {
          name: name,
          email: email
        };
        localStorage.setItem('userData', JSON.stringify(userData));
  
        // Display user greeting
        userGreeting.textContent = `Hi, ${name}!`;
      } else {
        alert('Please fill in all fields with valid information.');
      }
    });
  });
  