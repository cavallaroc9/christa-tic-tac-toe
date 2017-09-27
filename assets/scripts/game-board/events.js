// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

const cellsArray = ['', '', '', '', '', '', '', '', '']

let turn = 'playerX'

const findIndex = function (cell) {
  let index
  switch (cell) {
    case '#box0':
      index = 0
      return index
    case '#box1':
      index = 1
      return index
    case '#box2':
      index = 2
      return index
    case '#box3':
      index = 3
      return index
    case '#box4':
      index = 4
      return index
    case '#box5':
      index = 5
      return index
    case '#box6':
      index = 6
      return index
    case '#box7':
      index = 7
      return index
    case '#box8':
      index = 8
      return index
    case '#box9':
      index = 9
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
