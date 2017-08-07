
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',function(table){
    table.increments()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
