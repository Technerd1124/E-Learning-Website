


// function validateForm() {

//   with(document.forms[0]){
//     var name = name.value;
//     var email = email.value;
//     var message = message.value;
//   }
//   if(name== "" && name.length > 20){
//     alert("  Invalide name feild  ( Name should be between 1-20 charcter");
//     return false;
//   }

//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   var validmail =emailRegex.test(email)
//  if(email =="" && validmail) {
//   alert("Invalid email address");
//   return false;
//  }
//  if(message.length > 50){
//   alert("Message should be less than 50 characters");
//   return false;
//  }
 
// }

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_akryqys";
    const templateID = "template_oiwwll5";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err) ,alert(" cannot send Feedback"));
  }
  
