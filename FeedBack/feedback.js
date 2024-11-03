function sendMail() {
    var perms = {
        name: document.getElementById("username").value,
        email: document.getElementById("email").value,
        message: document.getElementById("feedback").value
    };

    emailjs.send("service_23wzqfb", "template_spsoxnd", perms)
        .then(function(response) {
            alert("Email Sent!");
            console.log("Email sent successfully", response.status, response.text);
        }, function(error) {
            alert("Failed to send email.");
            console.error("Failed to send email", error);
        });
}
