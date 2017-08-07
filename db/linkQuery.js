var knex = require('./knex')

function addUser(obj){
  return knex('users').insert(obj)
}

module.exports = {
  addUser
}
