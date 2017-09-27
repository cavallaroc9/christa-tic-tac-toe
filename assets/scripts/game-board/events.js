// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

const cellsArray = ['', '', '', '', '', '', '', '', '']

let turn = 'playerX'

const findIndex = function (cell) {
  if (cell === '#box0') {
    const index = 0
    return index
  } else if (cell === '#box1') {
    const index = 1
    return index
  } else if (cell === '#box2') {
    const index = 2
    return index
  } else if (cell === '#box3') {
    const index = 3
    return index
  } else if (cell === '#box4') {
    const index = 4
    return index
  } else if (cell === '#box5') {
    const index = 5
    return index
  } else if (cell === '#box6') {
    const index = 6
    return index
  } else if (cell === '#box7') {
    const index = 7
    return index
  } else if (cell === '#box8') {
    const index = 8
    return index
  } else if (cell === '#box9') {
    const index = 9
    return index
  }
}

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
    const index = findIndex(cell)
    cellsArray[index] = 'x'
    console.log(cellsArray)
    console.log('Index is', findIndex(cell))
    switchTurn()
    console.log('player is', turn)
  } else if (turn === 'playerO' && hasNoMarker(cell) === true) {
    $(cell).text('O')
    const index = findIndex(cell)
    cellsArray[index] = 'o'
    console.log(cellsArray)
    console.log('Index is', findIndex(cell))
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
