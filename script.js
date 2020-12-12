const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')
const body = document.body

burger.addEventListener('click', (e) => {
  e.stopPropagation()
  burger.classList.toggle('active')
  nav.classList.toggle('active')
})
body.addEventListener('click', () => {
  burger.classList.remove('active')
  nav.classList.remove('active')
})