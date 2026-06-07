const btn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  menu.classList.toggle('active')
})
