
const app = document.getElementById('app')
const links = document.querySelectorAll('.side_bar__link')

const locationResolver = (location) => {
  switch (location) {
    case ('#/test1/'):
      app.innerHTML = "<h1>Im working1</h1>"
      break;
    case ('#/test2/'):
      app.innerHTML =
        "<h1>Im working2</h1>"
      break;
    case ('#/test3/'):
      app.innerHTML =
        "<h1>Im working</h1>"
      break;
    default:
      break;
  }
}

window.addEventListener('load', () => {
  const location = window.location.hash
  console.log(location)
  links.forEach(e => addEventListener('click', () => {
    const location = window.location.hash
    // const atr = event.target.getAttribute('href')
    console.log('atribute', location) // почему то при первом рендере выдает бред в какую область не тыкни срабатывает
    locationResolver(location)
    // classList.add('side_bar__link--active')
  }))
  if (location) {
    locationResolver(location)
  }
})

