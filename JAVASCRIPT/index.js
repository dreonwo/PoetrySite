const navSlide = () =>{
    const burger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('hamburger-active');
        nav.classList.toggle('navbar-active');

        links.forEach((link, idx) => {
            if(link.style.animation)
                link.style.animation=''
            else
                link.style.animation = `navLinkFade .5s ease forwards ${idx/7 + .5}s`;
        });

        burger.classList.toggle('toggle');


    });

}; 

navSlide();


