
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ✅ Smooth scrolling for internal page links (e.g., awareness.html sections)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Backup scroll function in case inline doesn't work
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    const headerOffset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}


// ✅ "Join" button functionality on Get Involved page
const joinForm = document.querySelector("form");
if (joinForm) {
  joinForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = joinForm.querySelector('input[type="text"]').value.trim();
    const email = joinForm.querySelector('input[type="email"]').value.trim();

    if (!name || !email) {
      alert("⚠️ Please fill in your name and email before submitting.");
    } else {
      alert(`✅ Thank you, ${name}! You’ve successfully signed up as a volunteer.`);
      joinForm.reset();
    }
  });
}

// ✅ Donate button functionality
const donateBtn = document.querySelector(".donate-btn");
if (donateBtn) {
  donateBtn.addEventListener("click", () => {
    alert("💖 Thank you for your willingness to help! Online donations are coming soon.");
  });
}

// ✅ Weather feature placeholder (for Home page)
const weatherCard = document.querySelector(".access-card:nth-child(1)");
if (weatherCard) {
  weatherCard.addEventListener("click", () => {
    alert("🌦️ Live weather feature coming soon!");
  });
}

// ✅ Scroll-to-top button (optional enhancement)
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆️";
scrollBtn.id = "scrollToTop";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "1.2rem";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#2c5aa0";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelector('form[role="search"]').addEventListener('submit', function(e) {
  e.preventDefault();

  const query = this.querySelector('input').value.toLowerCase();
  const elements = document.querySelectorAll('h1, h2, h3, p, li, a');
  let found = false;

  elements.forEach(el => {
    if (el.textContent.toLowerCase().includes(query)) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.backgroundColor = 'rgba(255, 255, 0, 0.4)'; // highlight effect
      setTimeout(() => el.style.backgroundColor = '', 2000); // remove highlight after 2s
      found = true;
    }
  });

  if (!found) {
    alert('No matching content found on this page.');
  }
});
