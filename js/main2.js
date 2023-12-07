import { greet } from "./greeting.js";
//greet must match the function name in greeting.js
(() => {
  greet("Marco"); 
})();

document.addEventListener("DOMContentLoaded", function () {
  function toggleSpinner(show) {
    const spinnerContainer = document.getElementById("spinner-container");
    spinnerContainer.style.display = show ? "flex" : "none";
  }

  function changeSection(sectionId) {
    // Show the spinner as soon as the section link is clicked
    toggleSpinner(true);

    // Change to the selected section with smooth scroll
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Hide the spinner once the smooth scroll animation is complete
    setTimeout(function () {
      toggleSpinner(false);
    }, 1000);
  }

  // Event listener for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetSectionId = link.getAttribute("href").substring(1);

      // Selected section
      changeSection(targetSectionId);
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("spinner-container").style.display = "flex";

//   setTimeout(function () {
//     document.getElementById("spinner-container").style.display = "none";
//   }, 30);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   function toggleSpinner(show) {
//     const spinnerContainer = document.getElementById("spinner-container");
//     spinnerContainer.style.display = show ? "flex" : "none";
//   }

//   // handle sections
//   function changeSection(sectionId) {
//     toggleSpinner(true);

//     setTimeout(function () {
//       document.getElementById(sectionId).scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       toggleSpinner(false);
//     }, 1000);
//   }

  // Event listener for navigation links
//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       const targetSectionId = link.getAttribute("href").substring(1);

//       changeSection(targetSectionId);
//     });
//   });
// });
