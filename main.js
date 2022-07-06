'use strict'

// const carousel = document.querySelector('.carousel')
// // console.log(carousel)
// const slides = Array.from(carousel.children)
// // console.log(slides)
// const dots = Array.from(carouselNav.children)

const nav = document.querySelector("nav")
const carouselNav = document.getElementById("carousel-nav")



nav.addEventListener('click', e => {
    const targetItem = e.target.closest('#nav-categories')
    const dropdown = targetItem.nextElementSibling
    if(!targetItem) return;

    if(dropdown.classList.contains("open")){
        dropdown.classList.remove("open")
        dropdown.classList.add("close")
    }else{
        dropdown.classList.remove("close")
        dropdown.classList.add("open")
    }
})

// const navDropdown = document.querySelector(".categories-dropdown")
// console.log(navDropdown)
// document.body.onclick = () => {
//     if(navDropdown.classList.contains("open")){
//         navDropdown.classList.remove("open")
//         navDropdown.classList.add("close")
//     }
// }

carouselNav.addEventListener('click', e => {
    const currentSlideNav = document.querySelector(".active-slide-nav")
    const targetDot = e.target.closest('a');
    if(!targetDot) return
    currentSlideNav.classList.remove('active-slide-nav')
    targetDot.classList.add('active-slide-nav')
})

