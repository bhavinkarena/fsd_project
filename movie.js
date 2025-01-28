//responsive menu
let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
   header.classList.toggle('shadow',window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

//carosel

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay:5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //swiper
  var swiper = new Swiper(".coming-container",{
    spaceBetween:20,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:5000,
      disableOnInteraction:false,
    },
    breakpoints:{
      0:{
        slidesPerView:2,
      },
      568:{
        slidesPerView:3,
      },
      768:{
        slidesPerView:4,
      },
      968:{
        slidesPerView:5,
      },
    },
  });

//feedback form
const feedbackbox = document.querySelector('.feedbackbox')
const emoji =  document.querySelector('.emoji')
const textarea =  document.querySelector('.textarea')
const b =  document.querySelector('.b')

emoji.addEventListener('click',(e) =>{
    
     if(e.target.className.includes('emoji')) return;

     textarea.classList.add('textarea--active');
     b.classList.add('b--active');

})

feedbackbox.addEventListener('mouseleave',()=>{

  textarea.classList.remove('textarea--active');
  b.classList.remove('b--active');

})
