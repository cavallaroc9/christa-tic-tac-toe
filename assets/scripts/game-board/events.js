// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
// const cellsArray = ['', '', '', '', '', '', '', '', '']

let turn = 'playerX'

// const hasMarker = function (cell) {
//   if ($(cell).html().trim()) {
//     console.log('Not Empty')
//   } else {
//     console.log('Empty')
//     $(cell).text('X')
//     switchPlayer()
//   }
// }

// const hasMarker = function (cell) {
//   if ($(cell).html().trim()) {
//     markBoard(cell)
//     switchPlayer()
//    } else {
//      console.log('Already Marked!')
// }

const markBoard = function (cell) {
  if (turn === 'playerX') {
    // hasMarker(cell)
    $(cell).text('X')
    switchTurn()
    console.log('player is', turn)
  } else if (turn === 'playerO') {
    $(cell).text('O')
    switchTurn()
    console.log('player is', turn)
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
