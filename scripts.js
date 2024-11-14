let lastScrollTop = 0;
const backToTopButton = document.getElementById("backToTop");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#nav .nav-link");

window.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 200) {
        navbar.classList.add("fixed");

        navLinks.forEach(link => {
            link.style.color = "darkolivegreen";

            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuIcon.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        backToTopButton.style.display = "block";

        if (scrollTop > lastScrollTop) {
            navbar.style.transform = "translateY(0)";
        } else {
            navbar.style.transform = "translateY(-100%)";
        }
    } else {
        navbar.classList.remove("fixed");
        navbar.style.transform = "translateY(0)";
        backToTopButton.style.display = "none";

        navLinks.forEach(link => {
            link.style.color = "white";
        });
    }

    lastScrollTop = scrollTop;
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const menuIcon = document.querySelector('.menu-icon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    navbar.classList.toggle('navbar-white');
    
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        menuIcon.style.color = 'darkolivegreen';
    } else {
        document.body.style.overflow = 'auto';
        menuIcon.style.color = 'inherit';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const googleReviewsContainer = document.getElementById('googleReviewsContainer');

    function loadGoogleReviews() {
        const testReviews = [
            { text: "sem duvidas uma das clinicas mais humanas q ja conheci", author_name: "Jose Alberto" },
            { text: "A Clínica de Reabilitação Vitaly se destaca pela equipe qualificada, ambiente acolhedor e atendimento personalizado, oferecendo apoio eficiente e humanizado na recuperação dos pacientes.", author_name: "Marcelo José Costa Filho" },
            { text: "Top! Excelente lugar, melhor lugar pra tratamento do alcoólatra e dependente químico! Tratamento humanizado! Recomendo!", author_name: "Marcos Donizetti Moreira" },
            { text: "Vitaly, um projeto de vida", author_name: "Ricardo Pereira" },
            { text: "Aqui seu familiar é tratado com humanização e respeito", author_name: "Maicon de Abreu" },
        ];

        const chunkSize = window.innerWidth < 768 ? 1 : 3;
        const slides = [];

        for (let i = 0; i < testReviews.length; i += chunkSize) {
            const reviewsGroup = testReviews.slice(i, i + chunkSize);
            const slideHTML = `
                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <div class="row justify-content-center">
                        ${reviewsGroup.map(review => `
                            <div class="col-md-4 col-sm-12">
                                <div class="review-card">
                                    <div class="card-body">
                                        <p class="card-text">"${review.text}"</p>
                                        <footer class="blockquote-footer text-white">${review.author_name}</footer>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            slides.push(slideHTML);
        }

        googleReviewsContainer.innerHTML = slides.join('');
    }

    loadGoogleReviews();
    window.addEventListener('resize', loadGoogleReviews);
});

