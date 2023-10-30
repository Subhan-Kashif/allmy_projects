ScrollTrigger.create({
    trigger:".main",
    start:"top top",
    end:"bottom bottom",
    endTrigger:'.last',
    pin:".dis-right",
    scrub:1,
})

const details = gsap.utils.toArray(".diselem:not(:first-child)")
const photos = gsap.utils.toArray(".dis-images img:not(:first-child)")
gsap.set(photos, {yPercent:101})
const allPhotos = gsap.utils.toArray(".dis-images img")
const imgdiv = document.querySelector(".dis-images")

details.forEach((detail, index)=> {

    let headline = detail.querySelector("h1")
    let animation = gsap.timeline()
       .to(photos[index], {yPercent:0})
       .set(allPhotos[index], {autoAlpha:0})
    ScrollTrigger.create({
        trigger: detail,
        start: `top 70%`,
        end:'top 30%',
        animation:animation,
        scrub:3,
    })
})
let section = document.querySelectorAll('.diselem')
section.forEach((element)=>{

console.log(element.getBoundingClientRect());
})
const mainbody = document.querySelector('body')
function changebackground(){

if (window.scrollY>(section[0].getBoundingClientRect().top*2) && window.scrollY<(section[0].getBoundingClientRect().top*2 + window.innerHeight)){
mainbody.style.backgroundColor= ' rgba(45, 202, 45, 0.267)'
} 
if (window.scrollY>(section[1].getBoundingClientRect().top*3.2) && window.scrollY<(section[1].getBoundingClientRect().top*3.2 + window.innerHeight)){
mainbody.style.backgroundColor= ' rgba(233, 99, 94, 0.267)'
} 
if (window.scrollY>(section[2].getBoundingClientRect().top*5.5) && window.scrollY<(section[2].getBoundingClientRect().top*5.5 + window.innerHeight)){
mainbody.style.backgroundColor= 'rgba(214, 136, 59, 0.398)'
} 
if (window.scrollY>(section[3].getBoundingClientRect().top*8) && window.scrollY<(section[3].getBoundingClientRect().top*8 + window.innerHeight)){
mainbody.style.backgroundColor= 'rgba(241, 58, 241, 0.267)'
} 
if (window.scrollY>(section[4].getBoundingClientRect().top*12) && window.scrollY<(section[4].getBoundingClientRect().top*12 + window.innerHeight)){
mainbody.style.backgroundColor= 'rgba(127, 197, 230, 0.305)'
} 
if (window.scrollY>(section[5].getBoundingClientRect().top*15.5) && window.scrollY<(section[5].getBoundingClientRect().top*15.5 + window.innerHeight)){
mainbody.style.backgroundColor= 'rgba(255, 0, 0, 0.271)'
} 

}

window.addEventListener('scroll',()=>{
changebackground()
})

ScrollReveal().reveal('.dis-left',{
    origin: 'left',
    distance: '2000px',
    duration: 1500,
    viewFactor: 0.2,
})
