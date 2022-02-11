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
