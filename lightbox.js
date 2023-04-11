const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const caption = document.querySelector(".caption");
const close = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImage.src = image.dataset.src;
    caption.innerHTML = image.alt;
  });
});

close.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
