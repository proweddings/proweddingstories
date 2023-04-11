const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const caption = document.querySelector(".caption");
const close = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex;

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

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxImage.src = image.dataset.src;
      caption.innerHTML = image.alt;
      currentIndex = index;
    });
  });
  
  function showImage(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    lightboxImage.src = galleryImages[index].dataset.src;
    caption.innerHTML = galleryImages[index].alt;
    currentIndex = index;
  }
  
  prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });
  
  nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });
  
  document.addEventListener("keydown", (event) => {
    if (lightbox.classList.contains("hidden")) return;
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
    if (event.key === "Escape") lightbox.classList.add("hidden");
  });