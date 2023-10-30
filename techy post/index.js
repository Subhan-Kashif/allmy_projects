const menubar = document.querySelector('#menu')
const headr = document.querySelector('.header')
        const cross = document.querySelector('#cross')
        const navmenu = document.querySelector('.mobile-menu')
        menubar.addEventListener('click', ()=>{
            navmenu.classList.toggle('show-menu')
            menubar.style.display = 'none'
            cross.style.display = 'block'
            headr.style.backgroundColor = 'black'
        })
        cross.addEventListener('click',()=>{
            navmenu.classList.remove('show-menu')
            menubar.style.display = 'block'
            cross.style.display = 'none'
        })
        function closemenu (){
            navmenu.classList.remove('show-menu')
            menubar.style.display = 'block'
            cross.style.display = 'none'
        }

        gsap.to('.header',{
            backgroundColor: 'black',
            duration: '0.5',
            
            scrollTrigger: {
                trigger: '.header',
                scroller: 'body',
                start: 'top -30px',
                scrub: true,
            }
        
        })
        gsap.to('.nav-bar',{
            padding: '8px 10px',
            
            scrollTrigger: {
                trigger: '.nav-bar',
                scroller: 'body',
                start: 'top -30px',
                scrub: 1,
            }
        
        })
        
 /*gsap.to('.diselem',{
            scrollTrigger:{
                trigger: 'main',//scroll trigger for stoppin screen
                pin: '.dis-section',
                start: 'top top',
                end: 'bottom bottom',
                endTrigger: '.last',//last element kis ko manna 
                scrub:1,
                // matlb jese jse scroll kro vesey vesy animate ho
            },
            y: '-500%',
            ease: Power0
        })*/
        


    
    
    const img = document.querySelectorAll('img')
    const btns = document.querySelectorAll('.bt')

    btns.forEach((btn, index)=>{
        btn.addEventListener('click',()=>{
            btns.forEach((bt)=>{
                bt.classList.remove('active')
            })
            btn.classList.add('active')
            
            img.forEach((img)=>{
                
                img.classList.remove('clip')
                
            })
            img[index].classList.add('clip')
        })
    })

const header1 = document.querySelectorAll('.first')
const cards = document.querySelector('.cards')
const ebook = document.querySelector('.limi')
const hcover = document.querySelector('.dfake')
const bundle = document.querySelector('.hack')
const cardcont = document.querySelector('.card-content-container')
const imgcont = document.querySelector('.images-cont')


header1.forEach((entry, index)=>{
    entry.addEventListener('click',()=>{
        header1.forEach((label)=>{
            label.classList.remove('selected')
        })
        entry.classList.add('selected')
        
        let translate = -33.33333 * index
        let translateImg = -100 * index
        cardcont.style.transform = `translate(${translate}%)`
        imgcont.style.transform = `translateX(${translateImg}%)`
    })
})
const scrollRevealOption = {
    distance: '50px',
    origin: 'left',
    duration: 500,
    reset: false,
    
}
ScrollReveal().reveal('.contact-info',{
    ...scrollRevealOption,
    origin: 'left',
    distance: '500px',
    delay: 400,
    duration: 1000,
    viewFactor: 0.3
})
ScrollReveal().reveal('.contact-form',{
    ...scrollRevealOption,
    origin: 'right',
    distance: '500px',
    delay: 400,
    duration: 1000,
    viewFactor: 0.3
})
ScrollReveal().reveal('.intro-info',{
    ...scrollRevealOption,
    origin: 'left',
    distance: '1000px',
    duration: 1500,
    viewFactor: 0.25,
})
ScrollReveal().reveal('.dev-content',{
    ...scrollRevealOption,
    origin: 'right',
    distance: '1000px',
    duration: 1500,
    viewFactor: 0.25,
})
ScrollReveal().reveal('.intro-head',{
    ...scrollRevealOption,
    origin: 'top',
    distance: '100px',
    duration: 1000,
    
})
ScrollReveal().reveal('.advan-dis-head',{
    ...scrollRevealOption,
    origin: 'top',
    distance: '100px',
    duration: 1000,
    viewFactor: 0.25
    
})
ScrollReveal().reveal('.form',{
    ...scrollRevealOption,
    origin: 'top',
    distance: '100px',
    duration: 1500,
    viewFactor: 0.25
    
})
ScrollReveal().reveal('.advan',{
    ...scrollRevealOption,
    origin: 'left',
    distance: '1000px',
    duration: 1500,
    viewFactor: 0.4,
})
ScrollReveal().reveal('.dis-contain',{
    ...scrollRevealOption,
    origin: 'right',
    distance: '1000px',
    duration: 1500,
    viewFactor: 0.4,
})

 
const inputs = document.querySelectorAll('.input')
const labels = document.querySelectorAll('.label')
const error = document.querySelectorAll('.error')
const form = document.querySelector('form')
const submit = document.querySelector('.submit')
const intcontain = document.querySelectorAll('.in-container')
inputs.forEach((input, index)=>{
    input.addEventListener('focus',()=>{
        intcontain.forEach((label)=>{
            if(input.value == "y"){
                label.classList.remove('focus')
            }  
        })
        intcontain[index].classList.add('focus')
    })
    input.addEventListener('blur',()=>{
        if(input.value.length < 1){
            intcontain[index].classList.remove('focus')
         }
    })
})
function emailvalid(email){
    let pattern = /\S+@\S+\.\S+/
    return pattern.test(email)
}
let flag = false
console.log(submit);
submit.addEventListener('click', ()=>{
    clearmessages()
    if(inputs[0].value.length<1){
        error[0].innerText = 'Name cannot be blank'
        error[0].classList.add('err')
        inputs[0].classList.add('margin')
        flag = true
    }

    if(!emailvalid(inputs[1].value)){
        error[1].innerText = 'Enter correct email'
        error[1].classList.add('err')
        flag = true
    }

    if(inputs[2].value.length<1){
        error[2].innerText = 'Number cant be blank'
        error[2].classList.add('err')
        flag = true
       
    }

    if(inputs[3].value.length<1){
        error[3].innerText = 'Enter Message'
        error[3].classList.add('err')
        flag = true
    }

    if (!flag){
        inputs.forEach((input)=>{
            input.value = ''

        })
    }
})

function clearmessages(){
    error.forEach((err, index)=>{
        error[index].innerHTML = ''
        error[index].classList.remove('err')
    })
}
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (!flag){
        form.reset()
        intcontain.forEach((label)=>{
            label.classList.remove('focus')
        })
    }
})
const emailinp = document.querySelector('.inp-email')
    const invalid = document.querySelector('.invalid')
    const popoup= document.querySelector('.pop-up')
    const header = document.querySelector('header')
    const body = document.querySelector('body')
    const sect1 = document.querySelector('section')
    const sect2 = document.querySelector('#section2')
    const cancel = document.querySelector('.cross')
    const button = document.querySelector('.join')
    const signup = document.querySelector('.pop-up button')

    button.addEventListener('click',()=>{
        window.scrollTo(0,0)
        popoup.classList.add('display')
        header.classList.add('filter')
        sect1.classList.add('filter')
        sect2.classList.add('filter')
        body.style.overflow = 'hidden'
        
    })
   
    signup.addEventListener('click', ()=>{
        if (!emailvalid(emailinp.value)){
            invalid.classList.add('showerror')
            emailinp.value= ''
        }else{
            popoup.classList.remove('display')
            header.classList.remove('filter')
            sect1.classList.remove('filter')
            sect2.classList.remove('filter')
            body.style.overflow = 'auto'
            emailinp.value= ''
        }
    })
    cancel.addEventListener('click',()=>{
        popoup.classList.remove('display')
        header.classList.remove('filter')
        invalid.classList.remove('showerror')
        sect1.classList.remove('filter')
        sect2.classList.remove('filter')
        body.style.overflow = 'auto'
        emailinp.value= ''
    })
     
