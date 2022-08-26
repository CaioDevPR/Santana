var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
     ul.classList.add('open');
    }
}


const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll() { 
const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
target.forEach(function(element){
    if((windowTop) > element.offsetTop){
        element.classList.add(animationClass);
    } else {
        element.classList.remove(animationClass);
    }
})
}


animeScroll();

if(target.length) {
    window.addEventListener('scroll' , debounce(function() {
        animeScroll();
    }, 200));
}




window.addEventListener('scroll'), function() {
    animeScroll();
}

$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });

const menuLinks = document.querySelectorAll(".nav a")