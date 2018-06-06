const app = {
  init: function() {
    const form = document.querySelector('form')
    form.addEventListener('submit', ev => {
      this.handleSubmit(ev)
    })

    
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    this.spellNote.push(value)
    return el
  },

  renderItem: function(spell) {
    // ['name', 'level']
    properties = Object.keys(spell)

    // collect an array of renderProperty's return values
    // (an array of <span> elements)
    const childElements = properties.map(property => {
      return this.renderProperty(property, spell[property])
    })

    const item = document.createElement('li')
    item.classList.add('spell')

    // append each <span> to the <li>
    childElements.forEach(el => {
      item.appendChild(el)
    })

    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()

    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,
    }

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)
    item.id = 'deleteButton'+ this.buttonCount
    list.appendChild(this.addButton(item))
  
    let fullSpell = `Spell Name: ${this.spellNote[0]}, Level: ${this.spellNote[1]}`
    this.spellBook.push(fullSpell)


    f.reset()
    f.spellName.focus()
    
    const deleteButton = document.getElementsByClassName("deleteButton")
    Array.from(deleteButton).forEach(element => {
      element.addEventListener('click', this.deleteSpell)
     });




  },

  spellBook:[],

  spellNote:[],

  addButton: function(item){
    const btn = document.createElement("BUTTON")
    btn.textContent = "Delete Spell"
    btn.classList.add('deleteButton')
    btn.id = 'deleteButton'+ this.buttonCount
    this.buttonCount++
    return btn
  },

  deleteSpell: function(buttonID){
    console.log('de')
    // const deleteList = document.getElementById(buttonID)
    // Array.from(deleteList).forEach(element => {
    //   const list = document.querySelector('#spells')
    //   console.log('lete')

    //   list.removeChild(element)
    // })
  },

  buttonCount:1,

}

app.init()