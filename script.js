var typed = new Typed('#autotype', {
    strings: [' C', 'C++','Java','SQL','Web Development'],
    typeSpeed:130,
    backSpeed: 30,
    loop:true
  });
 // setInterval( Typed(), 200);

 function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
