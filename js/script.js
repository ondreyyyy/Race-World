document.addEventListener("DOMContentLoaded", () => {
    // ===================== Мобильное меню =====================
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        document.addEventListener("click", e => {
            if (!e.target.closest("nav") && !e.target.closest(".mobile-menu-toggle")) {
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            }
        });

        document.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    // ===================== Форма обратной связи =====================
    const contactFormWrapper = document.getElementById("contact-form");
    if (contactFormWrapper) {
        const contactForm = contactFormWrapper.querySelector("form");

        contactForm.addEventListener("submit", e => {
            let valid = true;
            contactForm.querySelectorAll("input[required], textarea[required], select[required]")
                .forEach(input => {
                    if (!input.checkValidity()) {
                        input.classList.add("error");
                        valid = false;
                    }
                });
            if (!valid) e.preventDefault();
        });

        contactForm.querySelectorAll("input, textarea, select").forEach(input => {
            input.addEventListener("input", () => input.classList.remove("error"));
        });

        // Анимация появления
        setTimeout(() => {
            contactFormWrapper.style.opacity = "1";
            contactFormWrapper.style.transform = "translateY(0)";
        }, 150);
    }

    // ===================== Форма регистрации =====================
    const registrationForm = document.querySelector(".registration-form");
    if (registrationForm) {
        registrationForm.addEventListener("submit", e => {
            e.preventDefault();
            let valid = true;

            registrationForm.querySelectorAll("input[required]").forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add("error");
                    valid = false;
                } else {
                    input.classList.remove("error");
                }
            });

            const emailInput = registrationForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    emailInput.classList.add("error");
                    valid = false;
                }
            }

            if (valid) {
                setTimeout(() => window.location.href = "index.html", 100);
            }
        });

        registrationForm.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => {
                input.classList.remove("error");
                if (input.type === "email" && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value.trim())) input.classList.add("error");
                }
            });
        });

        // Анимация появления формы регистрации
        const formContainer = document.querySelector(".form-container");
        if (formContainer) {
            setTimeout(() => {
                formContainer.style.opacity = "1";
                formContainer.style.transform = "translateY(0)";
            }, 150);
        }
    }
});
