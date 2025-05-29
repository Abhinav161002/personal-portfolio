// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  // Basic validation
  if (!name) {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  // Success message
  alert(`Thanks, ${name}! Your message has been sent.`);
  
  // Optional: Reset the form
  this.reset();
});

