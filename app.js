const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;

  if (scrollPos < 600) {
    aboutMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (scrollPos < 1400) {
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.add('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

//Botões Footer

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const url1 = "https://www.facebook.com/daniellucasferreiradearaujo/";
const btn1 = document.querySelector('#btnfc')

function openInNewTab(url1) {
  const win = window.open(url1, '_blank')
  win.focus
}

btn1.addEventListener('click', () => {
  openInNewTab(url1)
})

const url2 = "https://www.instagram.com/daniel.ferreira75/";
const btn2 = document.querySelector('#btnist')

function openInNewTab(url2) {
  const win = window.open(url2, '_blank')
  win.focus
}

btn2.addEventListener('click', () => {
  openInNewTab(url2)
})

const url3 = "https://www.linkedin.com/in/daniel-lucas-ferreira-de-araújo-23007623a/";
const btn3 = document.querySelector('#btnlkd')

function openInNewTab(url3) {
  const win = window.open(url3, '_blank')
  win.focus
}

btn3.addEventListener('click', () => {
  openInNewTab(url3)
})