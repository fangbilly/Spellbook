const button = document.querySelector('button')

const changeContents = function() {
  const heading = document.querySelector('#heading_2')
  heading.textContent = 'Bonus Credit'
  button.textContent ='yes'
}

button.addEventListener('click', changeContents)
console.log('testing')
//make sure it works when you press enter