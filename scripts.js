let lastScrollTop = 0;
const backToTopButton = document.getElementById("backToTop");
const navbar = document.getElementById("navbar");

// Lógica de Scroll (Navbar e Botão Voltar ao Topo)
window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Adiciona a classe 'scrolled' (O CSS encarrega-se de mudar as cores para o verde esmeralda)
    if (scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Esconder navbar ao fazer scroll para baixo, mostrar ao fazer scroll para cima
    if (scrollTop > 200) {
        if (backToTopButton) backToTopButton.style.display = "flex";

        if (scrollTop > lastScrollTop) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }
    } else {
        navbar.style.transform = "translateY(0)";
        if (backToTopButton) backToTopButton.style.display = "none";
    }

    lastScrollTop = scrollTop;
});

// Ação do Botão Voltar ao Topo
if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Fechar menu mobile (Bootstrap 5) ao clicar numa ligação
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            // Utiliza a API nativa do Bootstrap 5 para fechar o menu suavemente
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Injeção dos Depoimentos do Google
document.addEventListener('DOMContentLoaded', () => {
    const googleReviewsContainer = document.getElementById('googleReviewsContainer');

    function loadGoogleReviews() {
        if (!googleReviewsContainer) return;

        const testReviews = [
            { text: "sem duvidas uma das clinicas mais humanas q ja conheci", author_name: "Jose Alberto" },
            { text: "A Clínica de Reabilitação Vitaly se destaca pela equipe qualificada, ambiente acolhedor e atendimento personalizado, oferecendo apoio eficiente e humanizado na recuperação dos pacientes.", author_name: "Marcelo José Costa Filho" },
            { text: "Top! Excelente lugar, melhor lugar pra tratamento do alcoólatra e dependente químico! Tratamento humanizado! Recomendo!", author_name: "Marcos Donizetti Moreira" },
            { text: "Vitaly, um projeto de vida", author_name: "Ricardo Pereira" },
            { text: "Aqui seu familiar é tratado com humanização e respeito", author_name: "Maicon de Abreu" },
            { text: "Top! Tratamento humanizado! Profissionais excelentes! Recomendo a todos que tem falimiliares alcoólatras e dependentes químicos!", author_name: "Marcos Donizetti Moreira" },
            { text: "Equipe preparada! Super indico", author_name: "Rodrigo Sobrinho" },
        ];

        const chunkSize = window.innerWidth < 768 ? 1 : 3;
        const slides = [];

        for (let i = 0; i < testReviews.length; i += chunkSize) {
            const reviewsGroup = testReviews.slice(i, i + chunkSize);
            
            // Adicionei classes modernas do Bootstrap (p-4, h-100, shadow-sm, rounded-4) 
            // direto na injeção do HTML para os cartões ficarem com um aspeto premium.
            const slideHTML = `
                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <div class="row justify-content-center px-2 px-md-4">
                        ${reviewsGroup.map(review => `
                            <div class="col-md-4 col-sm-12 mb-4">
                                <div class="review-card p-4 h-100 d-flex flex-column justify-content-between text-center shadow-sm" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; backdrop-filter: blur(5px);">
                                    <i class="fas fa-quote-left fs-2 text-white opacity-50 mb-3"></i>
                                    <p class="card-text text-white fs-5 fst-italic">"${review.text}"</p>
                                    <footer class="blockquote-footer text-white fw-bold mt-4 mb-0" style="opacity: 0.9; font-size: 1rem;">${review.author_name}</footer>
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