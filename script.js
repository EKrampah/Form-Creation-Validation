
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('registration-Form');//select form by ID
    
    const feedbackDiv = document.getElementById('form-feedback')
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const isValid = true;
        const messages = []

        
      // Validate username

      if (username.length < 3) {
        isValid = false
        messages.push("Username must be at least 3 characters long.")
      }

      if (password.length < 8) {
        isValid =false
        messages.push("Password must be at least 8 characters long.");
      }

      if (!email.includes("@")|| !email.includes(".")) {
        isValid =false
        messages.push("Please enter a valid email address.");
      }
        feedbackDiv.style.display = "block" 

      if (isValid) {
        feedbackDiv.textContent = "Registration successful"
        feedbackDiv.style.color = "#28a745"
      } else {
        feedbackDiv.textContent = messages.join("<br>")
        feedbackDiv.style.color = "#dc3545"
      }
    })
    


})
