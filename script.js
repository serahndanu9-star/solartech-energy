// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// PRODUCT WHATSAPP ORDER BUTTONS

const productButtons = document.querySelectorAll(".product-btn");

const whatsappNumber = "254719769010";

productButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const selectedProduct = button.dataset.product;

        const message =
            "Hello SolarTech Energy! ☀️ " +
            "I am interested in purchasing " +
            selectedProduct +
            ". Kindly share more details and pricing. Thank you!";

        const whatsappLink =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});


// QUOTE FORM

const quoteForm = document.getElementById("quote-form");
const formMessage = document.getElementById("form-message");

quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName =
        document.getElementById("customer-name").value.trim();

    const customerProduct =
        document.getElementById("product-interest").value;

    formMessage.textContent =
        "Thank you, " + customerName +
        "! Your enquiry for " + customerProduct +
        " has been prepared. This is a demo form and does not send your details yet.";

    quoteForm.reset();
});


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();