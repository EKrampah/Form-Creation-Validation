const form = document.getElementById('registration-Form');//select form by ID

const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameisValid = document.getElementById('username');
      const messages = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return;
      } else {
        usernameisValid.textContent = '';
      }


      // Validate email and must contain @ '.'
      const emailisValid = document.getElementById('email');
      const message = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailisValid.textContent = '';
      }

      // Validate password
      const passwordisValid = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        return;
      } else {
        passwordisValid.textContent = '';
      }

      function checkAnswer () {
        const feedbackDiv = document.querySelector('form-feedback']:checked')?.value;
    
        if (!userAnswer) {
            document.getElementById("form-feedback").textContent = "Registration successful! Style.color = #28a745";
            return; 
        }

    
        else {
            document.getElementById("form-feedback").textContent = "That's incorrect. Try again! style.color = #dc3545";
        }
    }
    //Add an event listener to the Submit Answer button 
    //document.getElementById("submit-answer").addEventListener("click", checkAnswer);
    
    const buttonCall = document.getElementsByTagName("submit");
    buttonCall.addEventListener("click", form);