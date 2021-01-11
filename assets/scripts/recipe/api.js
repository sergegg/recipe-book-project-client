'use strict'
const config = require('./../config')
const store = require('./../store')

const createRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const editRecipe = function (data) {
  // console.log('what is data in edit in recipe api ', data)
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data.recipe._id,
    method: 'PATCH',
    headers: {
      authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const viewRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data.recipe._id,
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + store.user.token
    }
  })
}
const deleteOne = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data.recipe._id,
    method: 'DELETE',
    headers: {
      authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
module.exports = {
  createRecipe,
  editRecipe,
  viewRecipe,
  index,
  deleteOne
}
