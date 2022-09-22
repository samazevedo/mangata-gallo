import '../css/style.css'

const slides = document.querySelectorAll('.carousel__img')
const btnPrev = document.querySelector('.carousel__btn__prev')
const btnNext = document.querySelector('.carousel__btn__next')

let activeSlide = 0
let interval = setInterval(moveCarousel, 4000)

function moveCarousel() {
    activeSlide++
    changeImage()
    setActiveSlide()
}

function changeImage() {
    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    } else if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(moveCarousel, 4000)
}

btnPrev.addEventListener('click', () => {
    activeSlide--
    changeImage()
    setActiveSlide()
    resetInterval()
})

btnNext.addEventListener('click', () => {
    activeSlide++
    changeImage()
    setActiveSlide()
    resetInterval()
})

function setActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}

// dark mode

const themeBtn = document.getElementById('theme_btn')
themeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const bg = document.querySelector('.bg')
    const html = document.querySelector('html')
    const logo = document.querySelector('.logo')

    if (bg.classList.contains('dark')) {
        bg.classList.remove('dark')
        html.classList.remove('dark')
        logo.classList.remove('dark')
        logo.innerHTML = ''
        logo.innerHTML = `<img src="./images/logo02.png" alt="logo" />`
        e.target.style.backgroundColor = '#000'
    } else {
        bg.classList.add('dark')
        html.classList.add('dark')
        logo.classList.add('dark')
        logo.innerHTML = ''
        logo.innerHTML = `<img src="./images/logo04.png" alt="logo" />`

        e.target.style.backgroundColor = '#fff'
    }
})
