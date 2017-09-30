'use strict'

const api = require('./api-board')
const ui = require('./ui-board')

let cellsArray = ['', '', '', '', '', '', '', '', '']
let marker
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

const displayDraw = function (event) {
  $('#win-or-draw').show()
  $('#win-or-draw').text('DRAW!!')
  $('#reset-button').show()
  console.log('DRAW')
}

const updateDraw = function (event) {
  over = true
  const game = {
    'game': {
      'cell': {
        'index': event.target.id,
        'value': marker
      },
      'over': over
    }
  }
  api.update(game)
    .then(displayDraw())
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const isDraw = function (cellsArray) {
  return cellsArray !== ''
}

const displayWinner = function () {
  $('#win-or-draw').show()
  $('#win-or-draw').text(turn + ' WINS!!')
  $('#reset-button').show()
  console.log('winner winner')
}

const updateWinner = function (event) {
  over = true
  const game = {
    'game': {
      'cell': {
        'index': event.target.id,
        'value': marker
      },
      'over': over
    }
  }
  api.update(game)
    .then(displayWinner())
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}
//
// // if array contains winning combo or draw, end game and alert winner
const findWinner = function (event) {
  if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[1] && cellsArray[1] === cellsArray[2]) {
    updateWinner(event)
  } else if (cellsArray[3] !== '' && cellsArray[3] === cellsArray[4] && cellsArray[4] === cellsArray[5]) {
    updateWinner(event)
  } else if (cellsArray[6] !== '' && cellsArray[6] === cellsArray[7] && cellsArray[7] === cellsArray[8]) {
    updateWinner(event)
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[3] && cellsArray[3] === cellsArray[6]) {
    updateWinner(event)
  } else if (cellsArray[1] !== '' && cellsArray[1] === cellsArray[4] && cellsArray[4] === cellsArray[7]) {
    updateWinner(event)
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[5] && cellsArray[5] === cellsArray[8]) {
    updateWinner(event)
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[4] && cellsArray[4] === cellsArray[8]) {
    updateWinner(event)
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[4] && cellsArray[4] === cellsArray[6]) {
    updateWinner(event)
  } else if (cellsArray.every(isDraw)) {
    updateDraw(event)
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
const switchTurn = function () {
  if (turn === 'Player X') {
    turn = 'Player O'
    console.log('Player O turn')
  } else {
    console.log('Player X turn')
    turn = 'Player X'
  }
}

const markBoard = function (event) {
  $(event.target).text(marker)
  cellsArray[event.target.id] = marker
  console.log('cellsArray is', cellsArray)
  findWinner(event)
  switchTurn()
  console.log('player is', turn)
}

const onUpdateGame = function (event) {
  if (over === false && hasNoMarker(event) === true) {
    if (turn === 'Player X') {
      marker = 'x'
    } else if (turn === 'Player O') {
      marker = 'o'
    }
    console.log('index is', event.target.id)
    const game = {
      'game': {
        'cell': {
          'index': event.target.id,
          'value': marker
        },
        'over': over
      }
    }
    api.update(game)
      .then(markBoard(event))
      .then(ui.updateBoardSuccess)
      .catch(ui.updateBoardFailure)
  }
}

const resetBoard = function () {
  over = false
  turn = 'Player X'
  $('.box').text(null)
  $('#reset-button').hide()
  $('#win-or-draw').hide()
  cellsArray = ['', '', '', '', '', '', '', '', '']
  console.log(over, cellsArray)
}

module.exports = {
  markBoard,
  resetBoard,
  onCreateGame,
  displayGameStat,
  onUpdateGame
}
