// =======================
// Part 1: Event Handling
// =======================

// Toggle theme (light/dark mode)
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter button
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countDisplay = document.getElementById("count");
counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// FAQ collapsible section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = 
      answer.style.display === "block" ? "none" : "block";
  });
});

// ==========================
// Part 2: Form Validation
// ==========================

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form submission
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (regex check)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation (min 6 chars)
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If valid, show success
  if (valid) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});

