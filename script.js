document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item a");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation classes when scrolling
  const sections = document.querySelectorAll("section");

  const checkIfInView = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // Add animation class if section is in the viewport
      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        section.classList.add("animate");
      } else {
        section.classList.remove("animate");
      }
    });
  };

  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode", darkModeToggle.checked);
    localStorage.setItem("darkMode", darkModeToggle.checked);
  });

  // Check local storage for dark mode preference
  const darkModePref = localStorage.getItem("darkMode");
  if (darkModePref === "true") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Back to Top button
  const backToTopButton = document.getElementById("backToTop");

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function handleScroll() {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Run checkIfInView on page load and scroll events
  window.addEventListener("load", checkIfInView);
  window.addEventListener("scroll", checkIfInView);
});
