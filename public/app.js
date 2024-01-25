const navF = () => {
    let nav = document.querySelector('.navbar')
    if (window.scrollY != 0) {
        nav.classList.add('fix_nav')
    } else {
        nav.classList.remove('fix_nav')
    }
}
window.addEventListener('load', navF)
window.addEventListener('scroll', navF)

const togler = document.querySelector('.navbar-toggler')
togler.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('blink')
})
//
const displayMoreBtn = () => {
    const portfolioImgs = document.querySelectorAll('.gal_box img')
    const btnMore = document.querySelector('.galery .btn')
    if (portfolioImgs.length <= 6) {
        btnMore.style.display = "none"
    }
}
displayMoreBtn()
//
const moreBtns = document.querySelectorAll('.btnMore')
const spans = document.querySelectorAll('.more')
for (let i = 0; i < moreBtns.length; i++) {
    moreBtns[i].addEventListener('click', () => {
        spans[i].classList.remove('d-none')
        moreBtns[i].classList.add('d-none')
    })
}
//
const allGallBoxes = document.querySelectorAll('.gal_box')
for (let i = 6; i < allGallBoxes.length; i++) {
    allGallBoxes[i].classList.add('d-none')
}
const GallbtnMore = document.querySelector('.galMore')
GallbtnMore.addEventListener('click', function () {
    for (let i = 6; i < allGallBoxes.length; i++) {
        allGallBoxes[i].classList.remove('d-none')
        this.parentElement.classList.add('d-none')
    }
})
//qaul
const tabs = document.querySelectorAll('.tabs a')
const contents = document.querySelectorAll('[data-content]')
tabs.forEach(el => {
    el.addEventListener('click', () => {
        const target = document.querySelector(el.dataset.target)
        contents.forEach(data => {
            data.classList.add('d-none')
        })
        target.classList.remove('d-none')
        tabs.forEach(el => {
            el.classList.remove('ql-activ')
        })
        el.classList.add('ql-activ')
    })
})