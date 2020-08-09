const nav = document.querySelector('.brand-nav');
const topToNav = nav.offsetTop;
const wrapper = document.querySelector('.wrapper');
const navbar = document.querySelector(".navbar");
const hamBurger = document.querySelector(".ham-burger");

function stickyNav(){
    if(window.scrollY >= topToNav){
        wrapper.style.paddingTop = nav.offsetHeight + 'px';
        wrapper.classList.add('fixed');

    }else{
        wrapper.style.paddingTop = 0;
        wrapper.classList.remove('fixed');
    }

    if (screen.width < 960) {
        wrapper.style.paddingTop = 0;
        wrapper.classList.remove('fixed');
    }
}
window.addEventListener('scroll', stickyNav);

a=navbar.querySelectorAll("a");
a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0; i<a.length; i++){
            a[i].classList.remove("active");
        }
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
    })
})

const hamburger=document.querySelector(".ham-burger");

hamburger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})

window.onclick=function(event){
    if(event.target!=hamBurger && event.target!=hamBurger.querySelector("span")){
        navbar.classList.remove('show');
    }
}

