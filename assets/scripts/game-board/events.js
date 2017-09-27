// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
let turn = 'playerX'

// if array contains winning combo, end game and alert winner
const findWinner = function (cellsArray) {
  if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[1] && cellsArray[1] === cellsArray[2]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[3] !== '' && cellsArray[3] === cellsArray[4] && cellsArray[4] === cellsArray[5]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[6] !== '' && cellsArray[6] === cellsArray[7] && cellsArray[7] === cellsArray[8]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[3] && cellsArray[3] === cellsArray[6]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[1] !== '' && cellsArray[1] === cellsArray[4] && cellsArray[4] === cellsArray[7]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[5] && cellsArray[5] === cellsArray[8]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[0] !== '' && cellsArray[0] === cellsArray[4] && cellsArray[4] === cellsArray[8]) {
    return console.log('winner winner chicken dinner!')
  } else if (cellsArray[2] !== '' && cellsArray[2] === cellsArray[4] && cellsArray[4] === cellsArray[6]) {
    return console.log('winner winner chicken dinner!')
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

const markBoard = function (event, cellsArray) {
  if (turn === 'playerX' && hasNoMarker(event) === true) {
    $(event.target).text('X')
    cellsArray[event.target.id] = 'x'
    console.log(cellsArray)
    findWinner(cellsArray)
    switchTurn()
    console.log('player is', turn)
  } else if (turn === 'playerO' && hasNoMarker(event) === true) {
    $(event.target).text('O')
    cellsArray[event.target.id] = 'o'
    console.log(cellsArray)
    findWinner(cellsArray)
    switchTurn()
  }
}

// If turn = playerX
// then
// marker = X
// mark board with X
// Change turn to playerO
//
const switchTurn = function () {
  if (turn === 'playerX') {
    turn = 'playerO'
    console.log('Player O turn')
  } else {
    console.log('Player X turn')
    turn = 'playerX'
  }
}

// const onSubmitForm = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
// }

module.exports = {
  markBoard
}
