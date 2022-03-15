//ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show') //INSERE A CLASS 'SHOW' QUANDO CLICAR NO ICONE
  })
}

//ABRE E FECHA O MENU QUANDO CLICAR LINK
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show') //REMOVE A CLASS 'SHOW' QUANDO CLICA NO LINK
  })
}

// MUDAR O HEADER DA PÁGINA NA HORA DO SCROLL

const header = document.querySelector('#header')
const navHeith = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeith) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// START OWN CAROUSEL

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })
})
