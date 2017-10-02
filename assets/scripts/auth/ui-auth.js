'use strict'

const store = require('../store')
// const boardEvents = require('../game-board/events')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#sign-up-div').hide()
  $('#sign-up input:text').val(null)
  $('#sign-up input:password').val(null)
  $('#sign-in-div').show()
  $('#message').text('You have successfully created an account!')
}

const signUpFailure = function () {
  // console.error(error)
  $('#message').text('Oops! Something went wrong creating your account. Please try again.')
}

const signInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  $('#sign-in-div').hide()
  $('#sign-in input:text').val(null)
  $('#sign-in input:password').val(null)
  $('#game-stat-button').show()
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#create-button').show()
  $('#message').text('Signed in as ' + store.user.email)
}

const signInFailure = function () {
  // console.log(error)
  $('#message').text('Oops! Something went wrong. Please try signing in again.')
}

const changePasswordSuccess = function () {
  // console.log('Changed Password successfully!')
  $('#change-password-div').hide()
  $('#change-password input:password').val(null)
  $('#change-password-button').show()
  $('#game-stat-button').show()
  $('#message').text('You have successfully changed your password for account ' + store.user.email)
}

const changePasswordFailure = function () {
  // console.log(error)
  $('#message').text('Oops! Something went wrong. Please try changing your password again.')
}

const signOutSuccess = function () {
  // console.log('Signed Out successfully!')
  store.user = null
  // boardEvents.resetBoard()
  $('#change-password-button').hide()
  $('#change-password-div').hide()
  $('#sign-out-button').hide()
  $('#create-button').hide()
  $('#game-stat-button').hide()
  $('#game-board').hide()
  $('#win-or-draw').hide()
  $('#sign-in-div').show()
  $('#change-password input:password').val(null)
  $('#message').text('You have signed out successfully!')
  // console.log(store.user)
}

const signOutFailure = function () {
  // console.log(error)
  $('#message').text('Oops! Something went wrong. Please try signing out again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
