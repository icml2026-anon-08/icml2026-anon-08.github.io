(function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeButton = document.getElementById("lightbox-close");
  const backdrop = document.getElementById("lightbox-backdrop");

  if (!lightbox || !lightboxImage || !lightboxCaption || !closeButton || !backdrop) {
    return;
  }

  function openLightbox(src, caption) {
    lightboxImage.src = src;
    lightboxImage.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxCaption.textContent = "";
    document.body.classList.remove("lightbox-open");
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("[data-lightbox-src]");
    if (!link) {
      return;
    }
    event.preventDefault();
    openLightbox(link.getAttribute("data-lightbox-src"), link.getAttribute("data-lightbox-caption"));
  });

  closeButton.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
})();
