const button = document.querySelector('button')

const changeContents = function() {
  const heading = document.querySelector('h1')
  heading.textContent = 'Basic homework'
  button.textContent ='yes'
}

button.addEventListener('click', changeContents)

//make sure it works when you press enter