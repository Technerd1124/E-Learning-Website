   // Navbar
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


   var typed = new Typed('#autotype', {
     strings: ['Learn for Free: Empower Your Knowledge and Skills! ', 'Advance Your Career with 100% Free Learning Resources'],
     typeSpeed:130,
     backSpeed: 30,
     loop:true
   }
 );
 
  // setInterval( Typed(), 200);
 
  function toggleMenu() {
   const navLinks = document.getElementById("navLinks");
   navLinks.classList.toggle("active");
 }