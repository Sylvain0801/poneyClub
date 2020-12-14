const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')
const body = document.body

burger.addEventListener('click', (e) => {
  e.stopPropagation()
  burger.classList.toggle('active')
  setTimeout(() => nav.classList.toggle('active'), 300
  )
})
body.addEventListener('click', () => {
  burger.classList.remove('active')
  setTimeout(() => nav.classList.remove('active'), 300)
})