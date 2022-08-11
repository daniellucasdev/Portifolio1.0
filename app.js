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

//Tools

const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de programação construída em cima de Tags voltada para a Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É uma linguagem de programação que permite a estilização do HTML</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação responsável principalmente pela interatividade usuário com o site.</p> <br>',
                    '<p>VueJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>TailwindCSS</p> <br> <p>TailwindCSS é um framework de utilidade com o intuito de construir rapidamente interfaces sem a necessidade de interagir demasiadamente com o Stylesheet, este sendo substituído pela própria Class.</p> <br>',
                    '<p>GIT</p> <br> <p>Simplesmente o melhor sistema de versões do mundo.</p> <br>',
                    '<p>Github</p> <br> <p>O GitHub é um serviço baseado em nuvem que hospeda um sistema de controle de versão (VCS) chamado Git. Ele permite que os desenvolvedores colaborem e façam mudanças em projetos compartilhados enquanto mantêm um registro detalhado do seu progresso.</p> <br>',
]
skills.forEach(  (elemento, index) => {
    let index1 = index;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Dê uma olhada nas ferramentas que conheço!';
    } )
} );
