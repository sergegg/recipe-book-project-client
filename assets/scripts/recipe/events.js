'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')


const onCreateRecipe = function (event) {
  event.preventDefault()
  api.createRecipe
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onError)
  console.log('what is onCreateRecipe', onCreateRecipe)
}
const onEditRecipe = function (event) {
  event.preventDefault()
  api.editRecipe
    .then(ui.onEditRecipeSuccess)
    .catch(ui.onError)
  console.log('what is onEditRecipe', onEditRecipe)
}
const onViewRecipe = function (event) {
  event.preventDefault()
  api.createRecipe
    .then(ui.onViewRecipeSuccess)
    .catch(ui.onError)
  console.log('what is onViewRecipe', onViewRecipe)
}
const onGetRecipes = function (event) {
  event.preventDefault()
  api.createRecipe
    .then(ui.onGetRecipesSuccess)
    .catch(ui.onError)
  console.log('what is onGetRecipes', onGetRecipes)
}

module.exports = {
  onCreateRecipe,
  onEditRecipe,
  onViewRecipe,
  onGetRecipes
}
