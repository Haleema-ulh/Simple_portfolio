// Simple JavaScript Function
function showMessage() {
  document.getElementById("message").innerText = "Thank you for visiting my portfolio!";
}

// 🌙 Dark Mode Toggle Script
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀ Light Mode";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});