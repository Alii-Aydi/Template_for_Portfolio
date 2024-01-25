const nav = document.querySelectorAll('.nav-link')
const land = document.querySelector('.land')
const gal = document.querySelector('.galery')
const about = document.querySelector('.about')
const skills = document.querySelector('.skills')
const servises = document.querySelector('.servises')
const contact = document.querySelector('.contact')
const sections = [land, gal, about, skills, servises, contact]
const ActivateLink = () => {
    nav.forEach(link => link.classList.remove('active'))
    let i = 0
    for (let sec of sections) {
        if (window.scrollY > sec.offsetTop - 400 && window.scrollY < (sec.offsetTop + sec.offsetHeight) - 200) {
            nav[i].classList.add('active')
        } else {
            i++
        }
    }
}
window.addEventListener('load', ActivateLink)
window.addEventListener('scroll', ActivateLink)