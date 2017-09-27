// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
let turn = 'playerX'

// if array contains winning combo, end game and alert winner

// const findIndex = function (cell) {
//   let index
//   switch (cell) {
//     case '#0':
//       index = 0
//       return index
//     case '#1':
//       index = 1
//       return index
//     case '#2':
//       index = 2
//       return index
//     case '#3':
//       index = 3
//       return index
//     case '#4':
//       index = 4
//       return index
//     case '#5':
//       index = 5
//       return index
//     case '#6':
//       index = 6
//       return index
//     case '#7':
//       index = 7
//       return index
//     case '#b8':
//       index = 8
//       return index
//     case '#9':
//       index = 9
//       return index
//   }
// }

// const findWinner = function (cellsArray) {
//   return cellsArray[0]
// }

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
    // const index = findIndex(cell)
    cellsArray[event.target.id] = 'x'
    console.log(cellsArray)
    // console.log('Index is', findIndex(cell))
    switchTurn()
    console.log('player is', turn)
  } else if (turn === 'playerO' && hasNoMarker(event) === true) {
    $(event.target).text('O')
    // const index = findIndex(cell)
    cellsArray[event.target.id] = 'o'
    console.log(cellsArray)
    // console.log('Index is', findIndex(cell))
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
