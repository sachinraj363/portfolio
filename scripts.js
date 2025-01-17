const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

document.addEventListener("DOMContentLoaded", function () {
  const darkModePreference = localStorage.getItem("darkMode");
  if (darkModePreference === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
