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

    let fullSpell = this.organizeNote(this.spellNote)

    const list = document.querySelector('#spells')
    list.appendChild(item)
    item.id = 'deleteButton'+ this.buttonCount
    list.appendChild(this.addButton(item,fullSpell))
  
    f.reset()
    f.spellName.focus()
      
   },

  spellBook:[],

  spellNote:[],

  addButton: function(item,fullSpell){
    const btn = document.createElement("BUTTON")
    btn.textContent = "Delete Spell"
    btn.classList.add('deleteButton')
    btn.id = 'deleteButton'+ this.buttonCount
    btn.name = fullSpell
    this.buttonCount++
    btn.addEventListener('click', ev => { this.deleteSpell(ev)})
    return btn
  },

  deleteSpell: function(ev){
    const buttonToDelete = ev.target
    const buttonID = ev.target.id
    const listToDelete = document.getElementById(buttonID)    
    const list = document.querySelector('#spells')
    list.removeChild(buttonToDelete)
    list.removeChild(listToDelete)
    let k = this.spellBook.indexOf(buttonToDelete)
    this.spellBook.splice(k-1,1)
    
  },

  buttonCount:1,

  organizeNote: function(spellNote){
    let fullSpell = `Spell Name: ${this.spellNote[0]}, Level: ${this.spellNote[1]}`
    this.spellBook.push(fullSpell)
    this.spellNote=[]
    return fullSpell
  },

}

app.init()