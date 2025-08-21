const toggleButton = document.getElementById("darkModeToggle");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save theme choice
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
