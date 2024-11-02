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

function getlogo() { 
  var logo = logoUSer();
  document.getElementById("logo").innerHTML1 = logo;
}
