function sendMail() {
   var perms ={
      name : document.getElementById("username").value ,
      email : document.getElementById("email").value ,
      message : document.getElementById("feedback").value 
   }

   emailjs.send("service_23wzqfb","template_spsoxnd",perms).then(alert(" Email Sent ! "))

   console.log(
      "Email sent successfully",
   )
}