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
window.onresize = () => {
  if(window.innerWidth > 1400) {
    if(burger.className === 'burger active')
    burger.classList.remove('active')
    nav.classList.remove('active')
  } 
}
