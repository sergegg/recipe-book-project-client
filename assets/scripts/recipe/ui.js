'use strict'

const store = require('./../store')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateRecipeSuccess = function (event) {
  $('#message2').text('yes')
  console.log('are we even getting this event? ', event)
  store.recipe = event.recipe
  console.log('are we even getting this store? ', store)
  $('form').trigger('reset')
}
const onEditRecipeSuccess = function (event) {
  $('#message2').text('yes')
  store.recipe = event.recipe
  $('form').trigger('reset')
}
const onViewRecipeSuccess = function (event) {
  $('#message2').text('yes')
  $('form').trigger('reset')
}
const onGetRecipesSuccess = function (event) {
  $('#message2').text('yes')
}
module.exorts = {
  onError,
  onCreateRecipeSuccess,
  onEditRecipeSuccess,
  onViewRecipeSuccess,
  onGetRecipesSuccess

}
