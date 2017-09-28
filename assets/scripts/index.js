'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./game-board/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#reset-button').hide()
  $(document).on('click', events.markBoard)
  // $('#reset-button').on('click', function () {
  //   events.resetBoard(cellsArray)
  // })
})
