// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
// const cellsArray = ['', '', '', '', '', '', '', '', '']

let turn = 'playerX'

// DONOTUSEconst hasMarker = function (cell) {
//   if ($(cell).html().trim()) {
//     console.log('Not Empty')
//   } else {
//     console.log('Empty')
//     $(cell).text('X')
//     switchPlayer()
//   }
// }
//
const hasNoMarker = function (cell) {
  if ($(cell).html().trim()) {
    console.log('Already Marked')
    return false
  } else {
    console.log('Empty')
    return true
  }
}

const markBoard = function (cell) {
  if (turn === 'playerX' && hasNoMarker(cell) === true) {
    $(cell).text('X')
    switchTurn()
    console.log('player is', turn)
  } else if (turn === 'playerO' && hasNoMarker(cell) === true) {
    $(cell).text('O')
    switchTurn()
  }
}
//   if (turn === 'playerX') {
//     if (hasNoMarker(cell)) {
//     $(cell).text('X')
//     switchTurn()
//     console.log('player is', turn)
//   }
//   } else if (turn === 'playerO') {
//     if (hasNoMarker(cell) === true) {
//     $(cell).text('O')
//     switchTurn()
//     console.log('player is', turn)
//   }
// }

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
