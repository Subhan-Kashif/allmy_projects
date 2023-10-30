
const loadmore = document.querySelector('.butto')
const loader = document.querySelector('.loader')
let currentitem = 3
function displaymore(){
if (currentitem>=6){
    loadmore.classList.add('hide')
}else if(currentitem<=3){
        loadmore.classList.add('hide')
        loader.classList.add('show')
        setTimeout(() => {
            let advCard = document.querySelectorAll('.adv-card')
            for (let index = currentitem; index < currentitem + 3; index++) {
            advCard[index].style.transition = 'display 10s, opacity 1.3s, scale 1.3s' 
            advCard[index].style.display = 'flex' 
            advCard[index].style.opacity = '1' 
            advCard[index].style.animation = 'animate 2s' 
            }
            currentitem = currentitem+3
            loader.classList.remove('show')
            window.scrollTo(0, 700) 
        }, 1000);
}}

loadmore.addEventListener('click',()=>{
    displaymore()
}) 
ScrollReveal().reveal('.adv-cards',{
    origin: 'top',
    distance: '500px',
    duration: 1000,
    viewFactor: 0.8,
})
ScrollReveal().reveal('.adv-cards .onee',{
    origin: 'left',
    distance: '1000px',
    delay:500,
    duration: 1000,
    viewFactor: 0.8,
})
ScrollReveal().reveal('.adv-cards .twoo',{
    origin: 'left',
    distance: '1000px',
    duration: 1500,
    delay:1000,
    viewFactor: 0.8,
})
ScrollReveal().reveal('.adv-cards .threee',{
    origin: 'left',
    distance: '1000px',
    delay: 1500,
    duration: 2000,
    viewFactor: 0.8,
})