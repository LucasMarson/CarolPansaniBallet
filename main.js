
/* abre e fecha o menu quando clicar no icone: humburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
    nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* Mudar o header da pagina quando der o scroll */
function changeHeaderWhenScroll () {
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        // Scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura da janela
        header.classList.remove('scroll')
    }
}

/* Testimonials */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* ScrollReveal: mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 600,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .phrase,
    #about .image, #about .text, #about .buttons,
    #services header, #services .card, #services .button,
    #teacher .text, #teacher .button, #teacher .image, #teacher .img,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .maps,
    footer .brand, footer .social
    `, { interval: 100}
)

/* Botão voltar para o topo */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop() 
})