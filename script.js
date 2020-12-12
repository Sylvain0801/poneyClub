const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')
const background = document.querySelector('.bg-image')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
})
background.addEventListener('click', () => {
  burger.classList.remove('active')
  nav.classList.remove('active')
})