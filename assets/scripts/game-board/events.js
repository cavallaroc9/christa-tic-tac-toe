const getFormFields = require('../../../lib/get-form-fields')
// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
// const cellsArray = ['', '', '', '', '', '', '', '', '']
const hasMarker = function (cell) {
  if ($(cell).html().trim()) {
    console.log('Not Empty')
  } else {
    console.log('Empty')
    $(cell).text('X')
  }
}

const onSubmitForm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
}

// const playerX = {
//   marker: 'x',
//   turn: false,
//   startTurn: function () {
//     this.turn = true
//   }
// }
//
// playerX.startTurn()
// console.log(playerX.turn)

module.exports = {
  onSubmitForm,
  hasMarker
}
