const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("is-active");
  }
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = tabs.querySelectorAll("[data-tab]");
  const panels = tabs.querySelectorAll("[data-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === target);
      });
    });
  });
});

document.querySelectorAll("[data-accordion] .faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    item.classList.toggle("is-open");
  });
});

const modal = document.querySelector("#infoModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalClose = document.querySelector(".modal__close");

document.querySelectorAll(".modal-open").forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.modalTitle;
    modalText.textContent = button.dataset.modalText;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [
      {
        input: document.querySelector("#name"),
        message: "Informe seu nome."
      },
      {
        input: document.querySelector("#email"),
        message: "Informe um e-mail valido.",
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
      {
        input: document.querySelector("#message"),
        message: "Escreva uma mensagem."
      }
    ];

    let isValid = true;

    fields.forEach((field) => {
      const value = field.input.value.trim();
      const error = field.input.parentElement.querySelector(".error-message");
      const valid = field.validate ? field.validate(value) : value.length > 0;

      if (!valid) {
        error.textContent = field.message;
        isValid = false;
      } else {
        error.textContent = "";
      }
    });

    const status = document.querySelector("#formStatus");
    if (isValid) {
      status.textContent = "Mensagem validada com sucesso. Envio simulado para a entrega academica.";
      contactForm.reset();
    } else {
      status.textContent = "";
    }
  });
}
