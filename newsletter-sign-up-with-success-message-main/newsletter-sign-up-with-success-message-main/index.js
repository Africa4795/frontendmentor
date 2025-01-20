document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscriptionForm");
    const emailInput = document.getElementById("email");
    const modal = document.getElementById("modal");
    const dismissButton = document.getElementById("dismissButton");
    const userEmail = document.getElementById("user-email");
    const emailLabel = document.querySelector("label[for='email']");
    const body = document.body;

    // Function to validate email
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    // Form submission event listener
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      const email = emailInput.value.trim();

      // Clear previous error message
      const existingError = document.querySelector(".error-message");
      if (existingError) existingError.remove();

      if (validateEmail(email)) {
        // Valid email: display modal
        userEmail.textContent = email;
        body.classList.add("modal-active"); // Add the modal-active class to body
        modal.classList.remove("hidden"); // Show the modal
        emailInput.style.borderColor = ""; // Reset input border color
        emailInput.style.backgroundColor = ""; // Reset input background color
      } else {
        // Invalid email: display error message and style the input
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Valid email required";
        errorMessage.classList.add("error-message");
        emailLabel.after(errorMessage);

        // Style the input for error state
        emailInput.style.borderColor = "red";
        emailInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)"; // Light red background
        emailInput.focus();
      }
    });

    // Dismiss button event listener
    dismissButton.addEventListener("click", () => {
      modal.classList.add("hidden"); // Hide the modal
      body.classList.remove("modal-active"); // Restore the main page
    });
  });