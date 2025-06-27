gsap.registerPlugin(MotionPathPlugin);

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   const scrollDown = window.scrollY

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

/*=============== GSAP ===============*/
gsap.to("#star", {
  duration: 8,
  repeat: -1,
  ease: "none",
  motionPath: {
    path: "#ovalPath",
    align: "#ovalPath",
    // autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});

gsap.to(".fresher-scroll-wrapper", {
  x: "-75%",
  scrollTrigger: {
    trigger: "#about-role",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  }
});
