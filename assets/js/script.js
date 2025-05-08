window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar"); // Selects the first element with class "navbar"

    if (!navbar) return; // Optional: Prevent errors if navbar is not found

    if (window.scrollY > 50) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
});
