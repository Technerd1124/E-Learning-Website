<<<<<<< HEAD

    
=======
   // Navbar
>>>>>>> c95a96954e6d697cb42898019d6d4ed80e678609
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


<<<<<<< HEAD
=======
   var typed = new Typed('#autotype', {
     strings: ['Learn for Free: Empower Your Knowledge and Skills! ', 'Advance Your Career with 100% Free Learning Resources'],
     typeSpeed:130,
     backSpeed: 30,
     loop:true
   }
 );
 
  // setInterval( Typed(), 200);
>>>>>>> c95a96954e6d697cb42898019d6d4ed80e678609
 
  function toggleMenu() {
   const navLinks = document.getElementById("navLinks");
   navLinks.classList.toggle("active");
<<<<<<< HEAD
 }


 const span = document.querySelector('span')

const wordsList = ['Learn' ,"Grow","Empower","Succeed"]

function autoType(wordsList, element, time) {
  let wordIndex = 0
  let characterIndex = 0
  let skipUpdate = 0
  let reverseType = false

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--
      return
    }

    if (!reverseType) {
      skipUpdate = 2
      element.innerText = element.innerText +  wordsList[wordIndex][characterIndex]
      characterIndex++
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1)
      characterIndex--
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 6
      reverseType = true
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false
      wordIndex++
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0
    }
  }, 100)
}

autoType(wordsList, span)
// autoType(wordsList, span2)
=======
 }
>>>>>>> c95a96954e6d697cb42898019d6d4ed80e678609
