exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('Animals').insert([
        {id: 1, 
          name: 'Cat', 
          image_1: '../server/public/images/cat-head.png', 
          image_2: '../server/public/images/cat-body.png' 
        },
        {id: 2, 
          name: 'Dog', 
          image_1: '../server/public/images/dog-head.png', 
          image_2: '../server/public/images/dog-body.png' 
        },
        {id: 3, 
          name: 'Sheep', 
          image_1: '../server/public/images/sheep-head.png', 
          image_2: '../server/public/images/sheep-body.png' 
        },
        {id: 4, 
          name: 'Fox', 
          image_1: '../server/public/images/fox-head.png', 
          image_2: '../server/public/images/fox-body.png' 
        }
      ])
    })
}