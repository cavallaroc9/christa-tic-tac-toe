// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
let cellsArray = ['', '', '', '', '', '', '', '', '']
let turn = 'Player X'
let over = false

const displayDraw = function () {
  $('#win-or-draw').text('DRAW!!')
  $('#win-or-draw').show()
  over = true
  $('#reset-button').show()
  console.log('DRAW')
}

const isDraw = function (cellsArray) {
  return cellsArray !== ''
}

const displayWinner = function () {
  $('#win-or-draw').text(turn + ' WINS!!')
  $('#win-or-draw').show()
  over = true
  $('#reset-button').show()
  return console.log('winner winner chicken dinner!')
}
//
// // if array contains winning combo, end game and alert winner
const findWinner = function () {
  if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[1] && cellsArray[1] === cellsArray[2]) {
    displayWinner()
  } else if (cellsArray[3] !== '' && cellsArray[3] === cellsArray[4] && cellsArray[4] === cellsArray[5]) {
    displayWinner()
  } else if (cellsArray[6] !== '' && cellsArray[6] === cellsArray[7] && cellsArray[7] === cellsArray[8]) {
    displayWinner()
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[3] && cellsArray[3] === cellsArray[6]) {
    displayWinner()
  } else if (cellsArray[1] !== '' && cellsArray[1] === cellsArray[4] && cellsArray[4] === cellsArray[7]) {
    displayWinner()
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[5] && cellsArray[5] === cellsArray[8]) {
    displayWinner()
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[4] && cellsArray[4] === cellsArray[8]) {
    displayWinner()
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[4] && cellsArray[4] === cellsArray[6]) {
    displayWinner()
  } else if (cellsArray.every(isDraw)) {
    displayDraw()
  }
}

const hasNoMarker = function (event) {
  if ($(event.target).html().trim()) {
    console.log('Already Marked')
    return false
  } else {
    console.log('Empty')
    return true
  }
}

const markBoard = function (event) {
  if (over === false && turn === 'Player X' && hasNoMarker(event) === true) {
    $(event.target).text('X')
    cellsArray[event.target.id] = 'x'
    console.log(cellsArray)
    findWinner()
    switchTurn()
    console.log('player is', turn)
  } else if (over === false && turn === 'Player O' && hasNoMarker(event) === true) {
    $(event.target).text('O')
    cellsArray[event.target.id] = 'o'
    console.log(cellsArray)
    findWinner()
    switchTurn()
  }
}

const switchTurn = function () {
  if (turn === 'Player X') {
    turn = 'Player O'
    console.log('Player O turn')
  } else {
    console.log('Player X turn')
    turn = 'Player X'
  }
}

const resetBoard = function () {
  $('.box').text(null)
  $('#reset-button').hide()
  $('#win-or-draw').hide()
  over = false
  cellsArray = ['', '', '', '', '', '', '', '', '']
  console.log(over, cellsArray)
}
// const onSubmitForm = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
// }

module.exports = {
  markBoard,
  resetBoard
}
