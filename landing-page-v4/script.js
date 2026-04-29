(function () {
  "use strict";

  var successMessage = "You're on the list. We'll let you know when Laitly is ready.";
  var helperMessage = "No spam. Early access updates only.";
  var errorMessage = "Enter a valid email address.";

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setupWaitlistForm(form) {
    var input = form.querySelector('input[type="email"]');
    var message = form.querySelector("[data-form-message]");

    if (!input || !message) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = input.value.trim();
      form.classList.remove("is-error", "is-success");

      if (!isValidEmail(email)) {
        form.classList.add("is-error");
        message.textContent = errorMessage;
        input.setAttribute("aria-invalid", "true");
        input.focus();
        return;
      }

      input.setAttribute("aria-invalid", "false");
      form.classList.add("is-success");
      message.textContent = successMessage;
    });

    input.addEventListener("input", function () {
      if (!form.classList.contains("is-error")) {
        return;
      }

      form.classList.remove("is-error");
      input.setAttribute("aria-invalid", "false");
      message.textContent = helperMessage;
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");
        var target = targetId ? document.querySelector(targetId) : null;

        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function setupInitialHashScroll() {
    if (!window.location.hash) {
      return;
    }

    window.addEventListener("load", function () {
      var target = document.querySelector(window.location.hash);

      if (target) {
        window.setTimeout(function () {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        }, 0);
      }
    });
  }

  function setupReveals() {
    var items = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  document.querySelectorAll("[data-waitlist-form]").forEach(setupWaitlistForm);
  setupSmoothScroll();
  setupInitialHashScroll();
  setupReveals();
})();
