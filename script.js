// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
  } else {
    body.setAttribute("data-theme", "dark");
  }
});

// Modal Functionality
const navItems = document.querySelectorAll(".nav-item");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = `${item.dataset.modal}Modal`;
    document.getElementById(modalId).style.display = "flex";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Ensure all modals are closed on page load
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
});
