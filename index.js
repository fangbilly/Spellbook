console.log('testing')
const button = document.querySelector('button')

const changeContents = function() {
  const heading = document.querySelector('#heading_2')
  heading.textContent = 'Bonus Credit'
  button.textContent ='yes'
}

button.addEventListener('click', changeContents)

const form = document.querySelector('form')

const formChangeHeading = function(ev) {
   

   // var text= "#"+ form.elements['heading1'].value
    const headinga = document.querySelector("#spells")
    headinga.innerHTML += "<p>" + form.elements['newheading'].value+"</p>"
    form.elements['newheading'].value="" //reset() will go to default value
    console.log('heading changed')
  }

form.addEventListener("submit", formChangeHeading)
 