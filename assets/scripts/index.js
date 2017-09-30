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
  // Sign In
  $('#sign-in-link').on('click', function () {
    $('#sign-up-div').hide()
    $('#sign-in-div').show()
  })
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Sign Up
  $('#sign-up-div').hide()
  $('#sign-up-link').on('click', function () {
    $('#sign-in-div').hide()
    $('#sign-up-div').show()
  //  $('#sign-up').show()
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Change Password
  $('#change-password-div').hide()
  $('#change-password-button').hide()
  $('#change-password-button').on('click', function () {
    $('#change-password-button').hide()
    $('#game-stat-button').hide()
    $('#change-password-div').show()
  })
  $('#cancel-password').on('click', function () {
    $('#change-password-div').hide()
    $('#change-password-button').show()
    $('#game-stat-button').show()
  })
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Sign Out
  // $('#sign-out').hide()
  // $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out-button').hide()
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // Game Stat
  $('#game-stat-button').hide()
  $('#game-stat-button').on('click', boardEvents.displayGameStat)
  // Game Board
  $('#game-board').hide()
  $('#create-button').on('click', boardEvents.onCreateGame)
  $('#game-board').on('click', boardEvents.markBoard)
  $('#create-button').hide()
  $('#reset-button').on('click', boardEvents.resetBoard)
  $('#reset-button').on('click', boardEvents.onCreateGame)
  $('#reset-button').hide()
})
