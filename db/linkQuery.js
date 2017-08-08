var knex = require('./knex')

function addUser(obj){
  return knex('users').insert(obj)
}

function getUsers(){
  return knex('users').select()
}

function updateUser(obj){
  return knex('users').select().where('username',obj.username).update({
    'username':obj.username,
    'first_name':obj.first_name,
    'last_name':obj.last_name
  })
}

function deleteUser(name){
  return knex('users').select().where('username',name).del()
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
}
