function show() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "You are Logged In",
    showConfirmButton: true,
  });
}

function showError() {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Invalid Username",
    text: "Username must be between 4 and 15 characters.",
    showConfirmButton: true,
  });
}

function validateUser(username) {
  const validUsernameRegex =
    /^(?![!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-])[a-zA-Z][a-zA-Z0-9_-]{3,14}$/;
  return username !== "" && validUsernameRegex.test(username);
}

function validatePhone(phoneVal) {
  const regex = /^\d{10}$/; // For exact 10 digits only
  return phoneVal !== "" && regex.test(phoneVal);
}

function validateEmail(emailVal) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailVal !== "" && regex.test(emailVal);
}

function validForm() {
  const user = document.forms[0].username.value;
  const mail = document.forms[0].mail.value;
  const phone = document.forms[0].phoneno.value;

  if (!validateUser(user)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Username",
      text: "Username must be between 4 and 15 characters & start with an alphabet.",
      showConfirmButton: true,
    });
    return false;
  }

  if (!validateEmail(mail)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
      showConfirmButton: true,
    });
    return false;
  }

  if (!validatePhone(phone)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Phone Number",
      text: "Phone number must be exactly 10 digits.",
      showConfirmButton: true,
    });
    return false;
  }

  setCookie();

  return true;
}
function setCookie() {
  const form = document.forms.loginform;
  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  document.cookie = `UserName=${
    form.username.value
  }; expires=${date.toUTCString()}; path=/`;
  document.cookie = `MailID=${
    form.mail.value
  }; expires=${date.toUTCString()}; path=/`;
  document.cookie = `PhoneNumber=${
    form.phoneno.value
  }; expires=${date.toUTCString()}; path=/`;

  Swal.fire({
    position: "center",
    icon: "success",
    title: "You're Logged In Successfully",
    showConfirmButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      // Use window.open to open index.html in the same window
      window.location.pathname = "./index.html";
      window.location.reload();
    }
  });

}
function logoUSer(){ 
 var user = document.forms[0].username.value ;
 var logo = user.charAt(0);
 console.log(logo);
 return logo;
}
