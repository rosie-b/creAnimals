
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('CreAnimals', function (table) {
    table.increments().primary()
    table.string('animal_1_id')
    table.string('animal_2_id')
    table.string('name')
    table.string('species')
    table.string('likes')
    table.string('dislikes')
    table.string('diet')
    table.string('habitat')
    table.string('sound_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('CreAnimals')
};
