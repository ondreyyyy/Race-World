document.addEventListener("DOMContentLoaded", function () {

    //общие
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', function (event) {
            if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-toggle')) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Закрытие меню при нажатии Escape
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    //для обратной связи
    const form = document.querySelector("#contact-form form");
    if (form) {
        form.addEventListener("submit", function (event) {
            let valid = true;
            const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add("error");
                    valid = false;
                }
            });

            if (!valid) {
                event.preventDefault();
            }
        });

        form.querySelectorAll("input, textarea, select").forEach(input => {
            input.addEventListener("input", () => input.classList.remove("error"));
        });
    }

    setTimeout(() => {
        document.getElementById("contact-form").style.opacity = "1";
        document.getElementById("contact-form").style.transform = "translateY(0)";
    }, 150);
});
