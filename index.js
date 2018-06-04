console.log('testing')
const button = document.querySelector('button')

const changeContents = function() {
  const heading = document.querySelector('#heading_2')
  heading.textContent = 'Bonus Credit'
  button.textContent ='yes'
}

button.addEventListener('click', changeContents)

const form = document.querySelector('form')

const formChangeHeading = function() {
    const headinga = document.querySelector('#heading_1')
    headinga.textContent = form.elements['newheading'].value
    console.log('heading changed')
  }
 