
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetId = link.getAttribute("data-target");
    // Hide all content sections
    document.querySelectorAll(".content").forEach((content) => {
      content.classList.remove("active");
    });
    // Show the targeted content section
    document.getElementById(targetId).classList.add("active");
    // Remove 'active' class from all links
    document.querySelectorAll(".nav-list a").forEach((a) => {
      a.classList.remove("active");
    });
    // Add 'active' class to the clicked link
    link.classList.add("active");
  });
});

function openFeedback() {
  window.open("/FeedBack/feedback.html", "_self");
}

function Block_Click(event) {
  if (event.button == 2) {
    event.preventDefault();  // Prevent the default right-click behavior
    alert("Right click disabled!");
    return false;
  }
}
