exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Sounds', function (table) {
    table.increments().primary()
    table.text('name')
    table.text('sound_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Sounds')
}