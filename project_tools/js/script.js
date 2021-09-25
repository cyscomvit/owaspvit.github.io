const sub = document.querySelector(".sub-heading");
const heading = document.querySelector(".heading");
const tagline = document.querySelector(".tagline");
const btn = document.querySelector(".button");
const homeSection = document.querySelector('.inner1');
const contSection = document.querySelector('.inner2');
const aboutSection = document.querySelector('.inner3');
const buttonHome = document.getElementById('home_button');
const buttonCont = document.getElementById('cont_button');
const buttonAbout = document.getElementById('about_button');
const tl = gsap.timeline();
const toggler = true;

buttonHome.style.backgroundColor = '#fff';
buttonHome.style.color = 'black';

const toggleSection = (section) => {
    if (section === 'home') {
        contSection.style.animation = 'fade-out 0.4s forwards';
        aboutSection.style.animation = 'fade-out 0.4s forwards';
        buttonHome.style.backgroundColor = '#fff';
        buttonHome.style.color = 'black';
        buttonCont.style.backgroundColor = 'transparent';
        buttonCont.style.color = '#fff';
        buttonAbout.style.backgroundColor = 'transparent';
        buttonAbout.style.color = '#fff';
        setTimeout(() => {
            contSection.style.display = 'none';
            aboutSection.style.display = 'none'
            homeSection.style.animation = 'fade-in 0.4s forwards';
            homeSection.style.display = 'flex';
        }, 500)
    }
    else if (section === 'about') {
        homeSection.style.animation = 'fade-out 0.4s forwards';
        contSection.style.animation = 'fade-out 0.4s forwards';
        buttonHome.style.backgroundColor = 'transparent';
        buttonHome.style.color = '#fff';
        buttonCont.style.backgroundColor = 'transparent';
        buttonCont.style.color = '#fff';
        buttonAbout.style.backgroundColor = "#fff";
        buttonAbout.style.color = "black";
        setTimeout(() => {
            homeSection.style.display = 'none';
            contSection.style.display = 'none';
            aboutSection.style.animation = 'fade-in 0.4s forwards';
            aboutSection.style.display = 'flex';
        }, 500)

    }
    else {
        homeSection.style.animation = 'fade-out 0.4s forwards';
        aboutSection.style.animation = 'fade-out 0.4s forwards';
        buttonHome.style.backgroundColor = 'transparent';
        buttonHome.style.color = '#fff';
        buttonAbout.style.backgroundColor = 'transparent';
        buttonAbout.style.color = '#fff';
        buttonCont.style.backgroundColor = "#fff";
        buttonCont.style.color = "black";
        setTimeout(() => {
            homeSection.style.display = 'none';
            aboutSection.style.display = 'none';
            contSection.style.animation = 'fade-in 0.4s forwards';
            contSection.style.display = 'flex';
        }, 500)
    }
}

tl.to(sub, {
    y: -20,
    opacity: 1,
    duration: 0.3,
    ease: Power2.easeIn
})
    .to(heading, {
        y: -20,
        opacity: 1,
        duration: 0.3,
        ease: Power2.easeIn,
    })
    .to(tagline, {
        y: -20,
        opacity: 1,
        duration: 0.3,
        ease: Power2.easeIn,
    })
    .to(btn, {
        y: -20,
        opacity: 1,
        duration: 0.3,
        ease: Power2.easeIn,
    })
