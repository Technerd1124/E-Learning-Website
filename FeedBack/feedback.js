function sendMail() {
   var perms = {
       name: document.getElementById("username").value,
       email: document.getElementById("email").value,
       message: document.getElementById("feedback").value
   };

   emailjs.send("service_23wzqfb", "template_spsoxnd", perms)
       .then(function(response) {
           alert("Email sent successfully!");
           console.log("SUCCESS!", response.status, response.text);
       })
       .catch(function(error) {
           alert("Failed to send email.");
           console.error("FAILED...", error);
       });
}
