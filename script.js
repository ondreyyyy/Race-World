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

        const formContainer = document.querySelector(".form-container");
        if (formContainer) {
            setTimeout(() => {
                formContainer.style.opacity = "1";
                formContainer.style.transform = "translateY(0)";
            }, 150);
        }
    }

    // ===================== СТРАНИЦА СТАТИСТИКИ =====================
    const statsPage = document.querySelector('.stats-hero');
    if (statsPage) {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                const tabId = this.getAttribute('data-tab');

                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        const teamButtons = document.querySelectorAll('.team-button');
        const teamStats = {
            redbull: { points: 575, podiums: 21, laps: 860, poles: 12 },
            mercedes: { points: 409, podiums: 8, laps: 132, poles: 1 },
            ferrari: { points: 406, podiums: 9, laps: 98, poles: 7 },
            mclaren: { points: 302, podiums: 9, laps: 89, poles: 2 },
            aston: { points: 280, podiums: 8, laps: 45, poles: 0 }
        };

        teamButtons.forEach(button => {
            button.addEventListener('click', function () {
                const team = this.getAttribute('data-team');

                // Убираем активный класс у всех кнопок
                teamButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Обновляем статистику
                const stats = teamStats[team];
                const statCards = document.querySelectorAll('.stat-card .stat-number');
                if (statCards.length >= 4) {
                    statCards[0].textContent = stats.points;
                    statCards[1].textContent = stats.podiums;
                    statCards[2].textContent = stats.laps;
                    statCards[3].textContent = stats.poles;
                }
            });
        });

        const animateOnScroll = function () {
            const elements = document.querySelectorAll('.record-card, .stat-card, .driver-card');

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }
            });
        };

        const animatedElements = document.querySelectorAll('.record-card, .stat-card, .driver-card');
        animatedElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        });

        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        setTimeout(animateOnScroll, 100);
    }
});
