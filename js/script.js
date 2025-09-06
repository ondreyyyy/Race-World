document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.getElementById("appointment");
    if (dateInput) {
        let today = new Date().toISOString().split("T")[0] + "T00:00";
        dateInput.setAttribute("min", today);
    }

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
    }, 300);
});
