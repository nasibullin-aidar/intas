import './style/main.sass'
import './routing.js'

console.log("Hi man")

const sideBar = document.getElementById('side_bar')
const burgerButton = document.getElementById('burger')
const sideBarArrow = document.querySelector('.side_bar__arrow')
console.log(burgerButton)
console.log(sideBar)

burgerButton.addEventListener('click', () => {
  sideBar.classList.add('side_bar--visible')
  burgerButton.classList.add('invisible')
})

sideBarArrow.addEventListener('click', () => {
  burgerButton.classList.remove('invisible')
  sideBar.classList.remove('side_bar--visible')
})