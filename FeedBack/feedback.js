function setCookies(name, email, message) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7); // Set cookie to expire in 7 days
  document.cookie = `name=${encodeURIComponent(name)}; expires=${expiryDate.toUTCString()}; path=/`;
  document.cookie = `email=${encodeURIComponent(email)}; expires=${expiryDate.toUTCString()}; path=/`;
  document.cookie = `message=${encodeURIComponent(message)}; expires=${expiryDate.toUTCString()}; path=/`;
}

function validateForm() {
  const form = document.forms[0];
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  if (name === "" || name.length < 1 || name.length > 20) {
    alert("Invalid name field. Name should be between 1-20 characters.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  if (message.length < 1 || message.length > 50) {
    alert("Message should be between 1 and 50 characters.");
    return false;
  }

  return true;
}

function sendMail() {
  // Validate form data before proceeding
  // if (!validateForm()) {
  //   alert("Incorrect data fields");
  //   return;
  // }

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Set cookies with the input values
  setCookies(name, email, message);

  const params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_akryqys";
  const templateID = "template_oiwwll5";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Clear the input fields after sending the email
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Your message was sent successfully!");
      console.log(res);
    })
    .catch(err => console.log("Failed to send email:", err));
}
