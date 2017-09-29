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
  $('#sign-up-link').on('click', function () {
    $('#sign-in-div').hide()
    $('#sign-up-div').show()
  //  $('#sign-up').show()
  })
  $('#sign-up-div').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in-link').on('click', function () {
    $('#sign-up-div').hide()
    $('#sign-in-div').show()
  //  $('#sign-up').show()
  })
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-button').hide()
  $('#game-board').hide()
  $('#game-stat-button').hide()
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-button').on('click', boardEvents.onCreateGame)
  $('#game-stat-button').on('click', boardEvents.displayGameStat)
  $('#reset-button').hide()
  // $(document).on('click', boardEvents.markBoard)
  $('#game-board').on('click', boardEvents.markBoard)
  $('#reset-button').on('click', boardEvents.resetBoard)
  $('#reset-button').on('click', boardEvents.onCreateGame)
})
