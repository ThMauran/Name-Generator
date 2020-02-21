
function preload(){
  firstNamesData = loadJSON("firstNames.json")
  lastNamesData = loadJSON('lastNames.json')
}


function setup() {
  noCanvas()
  introP = select('#introductionParagraph')
  newNameP = select('#newNameParagraph')
  button = select('#nameButton')
  button.mousePressed(newName)
}

function newName(){
  firstNameNumber = int(random(firstNamesData.firstNames.length))
  newFirstName = firstNamesData.firstNames[firstNameNumber]

  lastNameNumber = int(random(lastNamesData.lastNames.length))
  newLastName = lastNamesData.lastNames[lastNameNumber]

  newNameP.html("Votre nouveau nom est : " + newFirstName + " " + newLastName)
  newNameP.style('margin-left', '-180px')
}



function draw() {

}
