'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./game-board/events')

let cell

$(() => {
  setAPIOrigin(location, config)
})

let test = '#box0'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// $(test).on('click', function ()

$(() => {
  $(document).on('click', function (event) {
    let cell = ''
    cell = '#' + event.target.id + ''
    $(cell).on('click', function () {
      console.log('this is', this)
      if ($(this).html().trim()) {
        console.log('Not empty')
      } else {
        console.log('empty')
        $(this).text('X')
      }
    })
  })
  $('#box1').on('click', function () {
    $(this).text('O')
  })
})
