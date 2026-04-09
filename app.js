const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const article = button.closest("article");
    const isActive = item.classList.contains("active");

    article.querySelectorAll(".faq-item").forEach((el) => {
      el.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const runs = document.querySelectorAll(".pilot-run div");

runs.forEach((run, index) => {
  run.innerHTML += " — " + run.innerHTML;

  let position = 0;

  const speed = 0.3 + index * 0.1;

  function animate() {
    position -= speed;

    if (Math.abs(position) >= run.scrollWidth / 2) {
      position = 0;
    }

    run.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", () => {
  const teamToggles = document.querySelectorAll(".team-toggle");

  teamToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const bio = button.closest(".team-bio");
      if (!bio) return;

      const moreText = bio.querySelector(".team-bio-more");
      if (!moreText) return;

      const isOpen = !moreText.hasAttribute("hidden");

      if (isOpen) {
        moreText.setAttribute("hidden", "");
        button.textContent = "Читати більше";
        button.setAttribute("aria-expanded", "false");
      } else {
        moreText.removeAttribute("hidden");
        button.textContent = "Сховати";
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
