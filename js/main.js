const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const btnSearch = $('.btn-toggle-searchbar')
const btnScrollTop = $('.btn-scroll-top')
const searchForm = $('.searchForm')
const searchInput = $('.search-input')
const mainMenu = $('.main-menu')
const categoryTitles = $$('.categories .category-title') 
const overlays = $$('.categories .overlay') 
const forgetPass = $('.forget-pass')
const backToLogin = $('.back-to-login')
//modal form 
let isHidden = false;
const forms = $$('.modal__forms');
const switcherItems = $$('.modal-switcher__item');
const passInput = $('.password');
const eyeIcons = $('.eye-icons')
const formWrapper = $('.form-wrapper');

document.onscroll = function(){

    let scrollTop = document.documentElement.scrollTop || window.scrollY
        btnScrollTop.classList.toggle('active', scrollTop > 400);
        mainMenu.classList.toggle('active',  scrollTop> 500)
   
} 
$('.main-menu__icon').onclick = function(){
     const mainMenu = $('.main-menu');
     if(document.documentElement.offsetWidth < 989){
         if(mainMenu.classList.value === 'main-menu open'){
            mainMenu.classList.remove('open')
         }else{
            mainMenu.classList.add('open')
    
         }
     }
    
 }

eyeIcons.onclick = function(){
    if(formWrapper.classList.value ==='form-wrapper hidding'){
        formWrapper.classList.remove('hidding')
        passInput.type = 'text'
        
    }else{
        formWrapper.classList.add('hidding')
        passInput.type = 'password'

    }
}   

switcherItems.forEach((item,index) => {
    let form
    if(index === switcherItems.length-1 ){
        form = forms[0];

    }else{

        form = forms[index];
    }
    
    item.onclick = function(){
        $('.modal__forms.active').classList.remove('active');
        $('.modal-switcher__item.active').classList.remove('active');
        
        this.classList.add('active');
        form.classList.add('active')
    }
});


overlays.forEach((overlay,index) => {
    const category = categoryTitles[index].innerText;
    overlay.onmouseover = function(){
         overlay.style.backgroundColor = 'var(--dot-'+category+')';
    }

    overlay.onmouseout = function(){
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; 
        
        
    }
    
});





btnSearch.addEventListener('click',function(){
    if(searchForm.style.display === 'flex'){
        searchForm.style.display = 'none';
        searchInput.style.width = 0;
        searchInput.style.opacity = 0;

    }else{
        searchForm.style.display = 'flex';
        searchInput.style.width = 230 +'px';
        searchInput.style.opacity = 1;
    }
})


// Slider 

var slideIndex = 0;
const slides = $$('.slider__item'); 
const pages = $$('.page'); 

 showSlide(slideIndex);

function currentPage(n){
    showSlide(slideIndex = n-1)
    
}
function showSlide(n){
    if(n > slides.length){
        slideIndex = 1;
    }

    if(n<1 ){
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace('active','')        
    }

    for (let j = 0; j < pages.length; j++) {
        pages[j].className = pages[j].className.replace('active','')        

    }
    slideIndex++;
    if(slideIndex >slides.length){
        slideIndex = 1
    }
    slides[slideIndex-1].className += 'active';
    pages[slideIndex-1].className +='active';
    setTimeout(showSlide,10000)

}



  
var swiper = new Swiper('.hightlight .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: true,
    freeModeSticky: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    loop: true,
     autoplay: {
     delay: 5000,
  }
});

var swiper = new Swiper('.more-from-inhype .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        speed: 1500,
    centeredSlides: true,
    freeMode: true,
    freeModeSticky: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 5000,
        }

});

// Show navigation when click on main menu icon

