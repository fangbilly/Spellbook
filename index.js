const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = document.createTextNode(f.spellName.value)
  const gesture = document.createTextNode(f.gesture.value)
  const spellsDiv = document.querySelector('#spells')
  let a = buildListFromSpan(spellName,gesture)
   spellsDiv.appendChild(a)

  f.reset()
}

function buildListFromSpan(spellName,gesture){
  const spanspell = document.createElement("span")
  const spangesture = document.createElement("span")
  spanspell.setAttribute("class", "SpellName")
  spangesture.setAttribute("class", "Gesture")
  spanspell.appendChild(spellName)
  spangesture.appendChild(gesture)  
  return buildList(spanspell,spangesture)
}

function buildList(spanspell,spangesture){
  const listitem = document.createElement("li")
  listitem.appendChild(spanspell)
  listitem.appendChild(spangesture)
  return listitem
}

form.addEventListener('submit', changeHeading)