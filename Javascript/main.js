const navBar = document.getElementById('nav-bar'); 
const navMenu = document.getElementById('nav-menu'); 
const navClose = document.getElementById('nav-close');  
const popUp= document.getElementById('pop_up');
const popContainer = document.getElementById('pop_container');
const popClose = document.getElementById('pop_close');
const clickUp = document.getElementById('click-up');
const firstHeader = document.getElementById('first_header'); 
// const revealed_elements = document.getElementById('revealed')
const bioSection = document.getElementById('bio')
const projectsSection = document.getElementById('projects')
const contactSection = document.getElementById('contact')


navBar.addEventListener('click', toggleNavbar)
navClose.addEventListener('click', untoggleNavBar)
popClose.addEventListener('click', closePopup)
// popUp.addEventListener('click', closePopup2)
clickUp.addEventListener('click', openPopup)


function toggleNavbar() {
    console.log('hamburger nav')
    navMenu.classList.add('active')  
    navClose.classList.add('opened')
    navBar.classList.add("closed")
} 

function untoggleNavBar(){
    console.log('close nav')
    navMenu.classList.remove('active') 
    navClose.classList.remove('opened') 
    navBar.classList.remove('closed')

}
function openPopup(){
    popUp.classList.add('pop-up-open')
    bioSection.classList.remove('reveal-active')
    contactSection.classList.remove('reveal-active')
    projectsSection.classList.remove('reveal-active')
}

function closePopup(){
    popUp.classList.remove('pop-up-open')
    bioSection.classList.add('reveal-active')
    contactSection.classList.add('reveal-active')
    projectsSection.classList.add('reveal-active')
}

// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//       })
//     }
// }


// ------------------------ANIMATIONS----------------------------//
const tl = gsap.timeline({defaults: { ease: "power1.out"}})

tl.to('.text', {y:'0', duration:1, stagger:0.25})
tl.to('.info', {y:'-100%', duration:1 })
tl.to('.slider', {x:'-100%', duration:1 })


setTimeout( () => {
   firstHeader.style.display = 'block'
}, 2300)

setTimeout( () => {
    firstHeader.style.background = 'var(--dark-color)'
}, 2700)

tl.fromTo('.nav_logo', { opacity: 0}, { opacity: 1, duration: 1})
tl.fromTo('.nav_item', { opacity: 0}, { opacity: 1, duration: 1}, "-=1")
tl.fromTo('.hero-header', { opacity: 0}, { opacity: 1, duration: 1}, "-=1")
tl.fromTo('.nav_bar', { opacity: 0}, { opacity: 1, duration: 1}, "-=1")

// Reveal elements on scroll 
window.addEventListener('scroll', revealElements) 

function revealElements() {
    var elements = document.querySelectorAll('.reveal')

    for(let i = 0; i < elements.length; i++){
        var windowHeight = window.innerHeight 
        var revealPoint = elements[i].getBoundingClientRect().top 
        var revealTop  = 200 

        if (revealTop < windowHeight - revealPoint){
            elements[i].classList.add('reveal-active')
        }
    }
}



