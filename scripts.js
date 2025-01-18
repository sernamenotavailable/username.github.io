document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Replace "example.receiver@gmail.com" with your email address
  const mailtoLink = `mailto:shehiandri@gmail.com?subject=Message from ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  // Open the user's email client
  window.location.href = mailtoLink;
});

