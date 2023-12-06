import { greet } from "./greeting.js";
//greet must match the function name in greeting.js
(() => {
  greet("Marco"); // Outputs: Hello, Alice!
})();

document.addEventListener("DOMContentLoaded", function () {
  // Function to show and hide the spinner
  function toggleSpinner(show) {
    const spinnerContainer = document.getElementById("spinner-container");
    spinnerContainer.style.display = show ? "flex" : "none";
  }

  // handle sections
  function changeSection(sectionId) {
    // Show the spinner when changing sections
    toggleSpinner(true);

    setTimeout(function () {
      // Change to the selected section
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      toggleSpinner(false);
    }, 1000);
  }

  // Event listener for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetSectionId = link.getAttribute("href").substring(1);

      // selected section
      changeSection(targetSectionId);
    });
  });
});
