'use strict'

const store = require('./../store')
// require the logic for the gameboard
// const logic = require('./logic')

const onError = function (error) {
  $('#message').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateRecipeSuccess = function (response) {
  $('#message').text('yes')
  store.recipe = response.recipe
  console.log('are we even getting this? ', response)
  $('form').trigger('reset')
}
const onEditRecipeSuccess = function (response) {
  $('#message').text('yes')
  store.recipe = response.recipe
  $('form').trigger('reset')
}
const onViewRecipeSuccess = function (response) {
  $('#message').text('yes')
  $('form').trigger('reset')
}
const onGetRecipesSuccess = function (response) {
  $('#message').text('yes')
}
module.exorts = {
  onError,
  onCreateRecipeSuccess,
  onEditRecipeSuccess,
  onViewRecipeSuccess,
  onGetRecipesSuccess

}
