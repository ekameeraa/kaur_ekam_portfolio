// projects=lightbox

function openLightbox(projectId) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const title = document.getElementById("lightbox-title");
  const description = document.getElementById("lightbox-description");
  const video = document.getElementById("lightbox-video");

  //const project = document.getElementById(projectId);
  const imgSrc = project.querySelector("img").src;
  const videoSrc = project.querySelector("video source").src; // Assuming video source is within the project element

  // Update lightbox content
  image.src = imgSrc;
  title.textContent = project.querySelector("h3").textContent;
  description.textContent = project.querySelector("p").textContent;
  video.src = videoSrc;
     // Play the video
     video.play();

     // Show the lightbox
     lightbox.style.display = "flex";
 }
  // const project = document.getElementById(projectId);
  // image.src = project.querySelector("img").src;
  // title.textContent = project.querySelector("h3").textContent;
  // description.textContent = project.querySelector("p").textContent;
  // const videoSrc = project.querySelector("video source").src;

  // Show the lightbox
//   lightbox.style.display = "flex";
// }

// close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

//click event listeners to each project
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".projects");

  projects.forEach((project) => {
    project.addEventListener("click", function () {
      const projectId = project.id;
      openLightbox(projectId);
    });
  });

  // closing sign in the lightbox
  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", closeLightbox);
});
