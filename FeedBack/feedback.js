
function setCookies(name, email, message) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7); // Set cookie to expire in 7 days
  document.cookie = `name=${encodeURIComponent(name)}; expires=${expiryDate.toUTCString()}; `;
  document.cookie = `email=${encodeURIComponent(email)}; expires=${expiryDate.toUTCString()};`;
  document.cookie = `message=${encodeURIComponent(message)}; expires=${expiryDate.toUTCString()};`;
}


function validateForm() {
  with(document.forms[0]){
    var name = name.value;
    var email = email.value;
    var message = message.value;
  }
  if(name== "" && name.length < 1){
    alert("  Invalide name feild  ( Name should be between 1-20 charcter");
    return false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validmail =emailRegex.test(email)
 if(email =="" && !validmail) {
  alert("Invalid email address");
  return false;
 }

 if(message.length > 1 && message.length < 50){
  alert("Message should be less than 50 characters and MOre than 1 Character ");
  return false;
 }

 return true;

}
function sendMail() {
  // Get input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if( !validateForm()){
    alert(" Incorrect Data Fields ")
  }
  
 // Set cookies with the input values
 setCookies(name, email, message);
  var params = {
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
      console.log(res);
      alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}

