'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up successfully!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in successfully!')
  store.user = data.user
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Error on sign in')
}
//
// const changePasswordSuccess = function () {
//   console.log('Changed Password successfully!')
//   $('#message').text('Changed Password successfully!')
// }
//
// const changePasswordFailure = function (error) {
//   console.log(error)
//   $('#message').text('Error Change Password')
// }
//
// const signOutSuccess = function () {
//   console.log('Signed Out successfully!')
//   $('#message').text('Signed Out successfully!')
//   store.user = null
//   console.log(store.user)
// }
//
// const signOutFailure = function (error) {
//   console.log(error)
//   $('#message').text('Error on sign out')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
