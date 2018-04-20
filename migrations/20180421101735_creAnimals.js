exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('CreAnimals', function (table) {
    table.increments().primary()
    table.integer('animal_1_id')
    table.integer('animal_2_id')
    table.text('name')
    table.text('species')
    table.text('likes')
    table.text('dislikes')
    table.text('diet')
    table.text('habitat')
    table.integer('sound_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('CreAnimals')
};