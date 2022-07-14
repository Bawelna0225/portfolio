window.addEventListener("load", () => {
  setTimeout(() => {
    // remove preload after 1 second
    document.querySelector(".transition").classList.remove("is-active");
  }, 1800);
});

let root = document.documentElement;

root.style.setProperty("--primary", localStorage.getItem("primary")); // set property values to that saved in local storage
root.style.setProperty("--secondary", localStorage.getItem("secondary"));
root.style.setProperty("--elem-color", localStorage.getItem("elem-color"));
root.style.setProperty("--navbar-color", localStorage.getItem("navbar-color"));
root.style.setProperty("--accent-color", localStorage.getItem("accent-color"));
root.style.setProperty("--text", localStorage.getItem("text"));
root.style.setProperty("--shadow-color", localStorage.getItem("shadow-color"));
root.style.setProperty(
  "--scrollbar-color",
  localStorage.getItem("scrollbar-color")
);
root.style.setProperty(
  "--scrollbar-color-hover",
  localStorage.getItem("scrollbar-color-hover")
);
root.style.setProperty(
  "--scrollbar-track-color",
  localStorage.getItem("scrollbar-track-color")
);
