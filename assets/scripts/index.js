'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events-auth')
const boardEvents = require('./game-board/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('#sign-up').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-button').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-button').on('click', boardEvents.onCreateGame)
  $('#reset-button').hide()
  // $(document).on('click', boardEvents.markBoard)
  $('#game-board').on('click', boardEvents.markBoard)
  $('#reset-button').on('click', boardEvents.resetBoard)
  $('#reset-button').on('click', boardEvents.onCreateGame)
})
