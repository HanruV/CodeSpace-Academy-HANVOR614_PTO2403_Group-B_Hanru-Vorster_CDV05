// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const container = document.querySelector(".container");

// Set default theme
container.classList.add("container-gradient-dark");

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    container.classList.remove("container-gradient-dark");
    container.classList.add("container-gradient-light");
  } else {
    body.setAttribute("data-theme", "dark");
    container.classList.remove("container-gradient-light");
    container.classList.add("container-gradient-dark");
  }
});

// Modal Functionality
const navItems = document.querySelectorAll(".nav-item");
const modals = document.querySelectorAll(".modal");

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close all modals first
    modals.forEach((modal) => {
      modal.style.display = "none";
    });

    // Open the selected modal
    const modalId = `${item.dataset.modal}Modal`;
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.style.display = "flex";
    }
  });
});

// Modify the window click handler to use stopPropagation
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.stopPropagation();
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  }
});

// Ensure all modals are closed on page load
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
});
