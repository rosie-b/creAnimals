
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Animals', function (table) {
    table.increments().primary()
    table.string('name')
    table.string('image_1')
    table.string('image_2')
  })
}


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Animals')
}
