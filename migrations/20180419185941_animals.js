exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Animals', function (table) {
    table.increments().primary()
    table.text('name')
    table.text('img_url_head')
    table.text('img_url_body')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Animals')
}