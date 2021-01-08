'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateRecipe = function (event) {
  event.preventDefault()
  console.log('hello event ', event)
  console.log('hello event.target ', event.target)
  const data = getFormFields(event.target)
  console.log('Data in create Recipe', data)
  console.log('what is onCreateRecipe', onCreateRecipe)
  api.createRecipe(data)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onError)
}
const onEditRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('what is onEditRecipe', onEditRecipe)
  console.log('Data in Edit Recipe', data)
  api.editRecipe(data)
    .then(ui.onEditRecipeSuccess)
    .catch(ui.onError)
}
const onViewRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Data in View Recipe', data)
  console.log('what is onViewRecipe', onViewRecipe)
  api.viewRecipe(data)
    .then(ui.onViewRecipeSuccess)
    .catch(ui.onError)
}
const onGetRecipes = function (event) {
  event.preventDefault()
  console.log('what is onGetRecipes', onGetRecipes)
  api.index()
    .then(ui.onGetRecipesSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateRecipe,
  onEditRecipe,
  onViewRecipe,
  onGetRecipes
}
