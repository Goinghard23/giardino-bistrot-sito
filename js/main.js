// Giardino Bistrot — interazioni base del prototipo

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initGalleryLightbox();
  initContactForm();
});

function initMobileNav() {
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll(".nav__links a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
    });
  });
}

function initGalleryLightbox() {
  var items = document.querySelectorAll("[data-lightbox-item]");
  var lightbox = document.querySelector("[data-lightbox]");
  if (!items.length || !lightbox) return;

  var labelEl = lightbox.querySelector("[data-lightbox-label]");
  var imageEl = lightbox.querySelector("[data-lightbox-image]");
  var closeEl = lightbox.querySelector("[data-lightbox-close]");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      var label = item.getAttribute("data-label");
      var img = item.getAttribute("data-img");
      labelEl.textContent = label;
      if (imageEl && img) {
        imageEl.src = img;
        imageEl.alt = label;
      }
      lightbox.classList.add("is-open");
    });
  });

  function close() {
    lightbox.classList.remove("is-open");
  }

  closeEl.addEventListener("click", close);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") close();
  });
}

function initContactForm() {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var successBox = document.querySelector("[data-form-success]");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Prototipo: nessun invio reale, il proprietario collegherà un servizio email prima del lancio.
    form.reset();
    if (successBox) {
      successBox.classList.add("is-visible");
      successBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
