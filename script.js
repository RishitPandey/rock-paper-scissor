const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerscore = document.querySelector('[data-computer-score]')
const yourscore = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: "rock",
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: "paper",
    emoji: "✋",
    beats: 'rock'
  },
  {
    name: "scissor",
    emoji: "✌️",
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selection)
    })
  })
function makeSelection(selection) {
    const computerSelection = randomselection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
    if(yourWinner) incrementScore(yourscore)
    if(computerWinner) incrementScore(computerscore)
    console.log(selection)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  console.log(winner)
  if(winner) div.classList.add('winner')
  finalColumn.after(div)
}

function isWinner(selection, opponentselection) {
  console.log(selection.beats === opponentselection.beats)
  return selection.beats === opponentselection.name
}

function randomselection() {
  const randomIndex =Math. floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}