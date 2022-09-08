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

  //Contantes do menu NAV
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const toolsMenu = document.querySelector('#tools-page');
  const projMenu = document.querySelector('#projects-page');
  let scrollPos = window.scrollY;

  if (scrollPos < 500) {
    aboutMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    toolsMenu.classList.remove('highlight');
    toolsMenu.classList.remove('highlight');
    return;
  } else if (scrollPos < 1400) {
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.add('highlight');
    toolsMenu.classList.remove('highlight');
    toolsMenu.classList.remove('highlight');
    return;
  }
    else if (scrollPos < 2100) {
      aboutMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      toolsMenu.classList.add('highlight');
      toolsMenu.classList.remove('highlight');
      return;
    }
  }



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

//Botões Ferramentas

const tool1 = document.querySelector('#proj1');
const git1 = "https://github.com/herokk1/Projeto-Weather";

const tool2 = document.querySelector('#proj2');
const git2 = 'https://github.com/herokk1/Projeto-LoFi';

const tool3 = document.querySelector('#proj3');
const git3 = 'https://github.com/herokk1/Projeto-Term'

const tool4 = document.querySelector('#proj4');
const git4= ''

function openInNewTab(git1) {
  const win = window.open(git1, '_blank')
}
tool1.addEventListener('click', () => {
  openInNewTab(git1)
})

function openInNewTab(git2) {
  const win = window.open(git2, '_blank')
}
tool2.addEventListener('click', () => {
  openInNewTab(git2)
})

function openInNewTab(git3) {
  const win = window.open(git3, '_blank')
}
tool3.addEventListener('click', () => {
  openInNewTab(git3)
})


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
                    '<p>HTML</p> <br>        <p>É uma linguagem de programação construída em cima de Tags voltada para a Web.</p> <br>',
                    '<p>CSS</p> <br>         <p>É uma linguagem de programação que permite a estilização do HTML</p> <br>',
                    '<p>JavaScript</p> <br>  <p>É uma linguagem de programação responsável principalmente pela interatividade usuário com o site.</p> <br>',
                    '<p>VueJS</p> <br>       <p>VueJS requer uma configuração mínima na criação de um projeto e pode ser facilmente integrado com uma aplicação já existente através de uma simples tag script.</p> <br>',
                    '<p>TailwindCSS</p> <br> <p>TailwindCSS tem o intuito de construir rapidamente interfaces sem a necessidade de interagir demasiadamente com o Stylesheet, este sendo substituído pela própria Class.</p> <br>',
                    '<p>GIT</p> <br>         <p>Simplesmente o melhor sistema de versões do mundo.</p> <br>',
                    '<p>Github</p> <br>      <p>GitHub é um serviço baseado em nuvem que hospeda GITs enquanto permite que os desenvolvedores colaborem e façam mudanças em projetos enquanto mantêm um registro do seu progresso.</p> <br>',
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
