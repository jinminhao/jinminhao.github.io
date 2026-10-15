// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  document.querySelectorAll(".publications img[data-zoomable]").forEach(function (image) {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "View larger: " + image.alt);
    image.setAttribute("aria-expanded", "false");
    image.title = "View larger · Enter or Space to open, Escape to close";
    image.setAttribute("data-zoom-src", image.src);
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        medium_zoom.toggle({ target: image });
      } else if (event.key === "Escape") {
        medium_zoom.close();
      }
    });
    image.addEventListener("medium-zoom:open", function () {
      image.setAttribute("aria-expanded", "true");
    });
    image.addEventListener("medium-zoom:opened", function () {
      document.querySelectorAll("body > img.medium-zoom-image").forEach(function (clone) {
        clone.removeAttribute("role");
        clone.removeAttribute("aria-expanded");
        clone.setAttribute("aria-hidden", "true");
        clone.tabIndex = -1;
      });
    });
    image.addEventListener("medium-zoom:closed", function () {
      image.setAttribute("aria-expanded", "false");
      image.focus({ preventScroll: true });
    });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      medium_zoom.close();
    }
  });
});
