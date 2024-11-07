
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home-text, .home-img,
         .about-img, .about-text,
         .box, .s-box,
         .btn, .connect-text,
         .contact-box`,
  {
    interval: 200,
  }
);

// setInterval( Typed(), 200);

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

 // Auto Typing Words 

const span = document.querySelector("span");
const wordsList = ["Learn", "Grow", "Empower", "Succeed"];

function autoType(wordsList, element) {
  let wordIndex = 0;
  let characterIndex = 0;
  let skipUpdate = 0;
  let reverseType = false;

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }

    if (!reverseType) {
      skipUpdate = 2;
      element.innerText =
        element.innerText + wordsList[wordIndex][characterIndex];
      characterIndex++;
    } else {
      element.innerText = element.innerText.slice(
        0,
        element.innerText.length - 1
      );
      characterIndex--;
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 6;
      reverseType = true;
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false;
      wordIndex++;
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0;
    }
  }, 100);
}

autoType(wordsList, span);


// Web Protection - Email Concealing


function CreateMail() {
  var x = "TeachAndteach&gmail*c_o_m";
  var y = "mai";
  var z = "lto";
  var s = "?subject=Customer Enquiry";
  
  // Replace symbols in x to form the correct email
  x = x.replace("&", "@");
  x = x.replace("*", ".");
  x = x.replace(/_/g, ""); // "TeachAndteach@gmail.com"
  document.getElementById("mail").innerHTML =x;
}
 
CreateMail();

function OpenContact() {
  var x = "TeachAndteach&gmail*c_o_m";
  var y = "mai";
  var z = "lto";
  var s = "?subject=Customer Enquiry";
  
  // Replace symbols in x to form the correct email
  x = x.replace("&", "@");
  x = x.replace("*", ".");
  x = x.replace(/_/g, ""); // "TeachAndteach@gmail.com"
  var gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${x}&su=${encodeURIComponent(s)}`;

  window.location =gmailLink;

}
