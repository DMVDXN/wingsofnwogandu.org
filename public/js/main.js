// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

// Forms: validation runs in the browser, but delivery is not connected yet.
// Replace this handler once the form backend and inbox are chosen (see DESIGN.md).
document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const status = form.querySelector(".form-status");
    if (status) {
      status.hidden = false;
      status.textContent =
        "Preview only: this form is not connected to an inbox yet, so your message was not sent.";
      status.focus();
    }
  });
});

// Share button: native share sheet where available, otherwise copy the link
document.querySelectorAll("[data-share]").forEach((button) => {
  button.addEventListener("click", async () => {
    const data = {
      title: "Wings of Nwoga Ndu Foundation",
      text: "Giving Every Child the Wings to Dream.",
      url: window.location.origin,
    };
    const label = button.textContent;

    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(data.url);
        button.textContent = "Link copied";
        setTimeout(() => (button.textContent = label), 2500);
      }
    } catch (error) {
      // The visitor dismissed the share sheet or clipboard access was denied
    }
  });
});

// Scroll reveal: sections and cards fade up as they enter the viewport.
// Skipped for visitors who prefer reduced motion, and content stays visible without it.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".section > .container, .card, .pillar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((target) => {
    // Cards in a row follow each other in
    if (target.classList.contains("card")) {
      const index = Array.from(target.parentElement.children).indexOf(target);
      target.style.setProperty("--delay", `${Math.min(index, 3) * 0.1}s`);
    }
    target.classList.add("reveal");
    observer.observe(target);
  });
}
