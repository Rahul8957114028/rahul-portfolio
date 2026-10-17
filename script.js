/* ==========================================================================
   RAHUL KUMAR PRAJAPATI - PORTFOLIO INTERACTION SCRIPT (script.js)
   College Mini Project #1 | B.Tech CSE 2nd Year
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC COPYRIGHT YEAR
    // Automatically sets the current year in the footer
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. MOBILE NAVIGATION HAMBURGER MENU
    // Toggles the mobile menu dropdown on smaller screen sizes
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu when any nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // 3. ACTIVE NAVIGATION LINK ON SCROLL
    // Highlights the current section's link in the navbar as user scrolls
    const sections = document.querySelectorAll("section[id]");

    function highlightNavLinkOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*="${sectionId}"]`)?.classList.add("active");
            } else {
                document.querySelector(`.nav-menu a[href*="${sectionId}"]`)?.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLinkOnScroll);

    // 4. NAVBAR BLUR & SHADOW ON SCROLL
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
        } else {
            header.style.boxShadow = "none";
        }
    });

});

// 5. SIMPLE CONTACT FORM HANDLER (Demonstration)
// Displays a confirmation message when user submits the contact form
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the browser from reloading the page
    
    const nameInput = document.getElementById("name").value;
    const formStatus = document.getElementById("formStatus");
    
    // Display a polite confirmation message
    formStatus.style.color = "#10b981"; // Accent green
    formStatus.innerHTML = `✓ Thank you <strong>${nameInput}</strong>! Your message has been received successfully.`;
    
    // Reset the form fields
    document.getElementById("contactForm").reset();

    // Clear the message after 6 seconds
    setTimeout(() => {
        formStatus.innerHTML = "";
    }, 6000);
}
