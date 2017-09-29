'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api-board')
const ui = require('./ui-board')

let cellsArray = ['', '', '', '', '', '', '', '', '']
let turn = 'Player X'
let over = false

const displayGameStat = function () {
  api.index()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onCreateGame = function (event) {
  api.create()
    .then(ui.createBoardSuccess)
    .catch(ui.createBoardFailure)
}

const onUpdateGame = function (event) {
  const game = {
    'game': {
      'cell': {
        'index': event.target.id,
        'value': cellsArray[event.target.id]
      },
      'over': over
    }
  }
  api.update(game)
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const displayDraw = function (event) {
  over = true
  $('#win-or-draw').text('DRAW!!')
  $('#win-or-draw').show()
  $('#reset-button').show()
  console.log('DRAW')
  console.log('When game is a tie over is', over)
  onUpdateGame(event)
  displayGameStat()
}

const isDraw = function (cellsArray) {
  return cellsArray !== ''
}

const displayWinner = function (event) {
  over = true
  $('#win-or-draw').text(turn + ' WINS!!')
  $('#win-or-draw').show()
  $('#reset-button').show()
  console.log('winner winner')
  console.log('When game is won over is', over)
  onUpdateGame(event)
  displayGameStat()
}
//
// // if array contains winning combo, end game and alert winner
const findWinner = function (event) {
  if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[1] && cellsArray[1] === cellsArray[2]) {
    displayWinner(event)
  } else if (cellsArray[3] !== '' && cellsArray[3] === cellsArray[4] && cellsArray[4] === cellsArray[5]) {
    displayWinner(event)
  } else if (cellsArray[6] !== '' && cellsArray[6] === cellsArray[7] && cellsArray[7] === cellsArray[8]) {
    displayWinner(event)
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[3] && cellsArray[3] === cellsArray[6]) {
    displayWinner(event)
  } else if (cellsArray[1] !== '' && cellsArray[1] === cellsArray[4] && cellsArray[4] === cellsArray[7]) {
    displayWinner(event)
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[5] && cellsArray[5] === cellsArray[8]) {
    displayWinner(event)
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[4] && cellsArray[4] === cellsArray[8]) {
    displayWinner(event)
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[4] && cellsArray[4] === cellsArray[6]) {
    displayWinner(event)
  } else if (cellsArray.every(isDraw)) {
    displayDraw()
  }
  // } else {
  //   onUpdateGame(event)
  // }
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
    findWinner(event)
    console.log('over value is', over)
    onUpdateGame(event)
    displayGameStat()
    switchTurn()
    console.log('player is', turn)
  } else if (over === false && turn === 'Player O' && hasNoMarker(event) === true) {
    $(event.target).text('O')
    cellsArray[event.target.id] = 'o'
    console.log(cellsArray)
    findWinner(event)
    console.log('over value is', over)
    onUpdateGame(event)
    displayGameStat()
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

const resetBoard = function (event) {
  $('.box').text(null)
  $('#reset-button').hide()
  $('#win-or-draw').hide()
  over = false
  cellsArray = ['', '', '', '', '', '', '', '', '']
  onUpdateGame(event)
  console.log(over, cellsArray)
}
// const onSubmitForm = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
// }

module.exports = {
  markBoard,
  resetBoard,
  onCreateGame,
  displayGameStat
}
