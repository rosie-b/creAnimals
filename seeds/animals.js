exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('Animals').insert([
        {id: 1, 
          name: 'Cat', 
          img_url_head: '../server/public/images/cat-head.png', 
          img_url_body: '../server/public/images/cat-body.png' 
        },
        {id: 2, 
          name: 'Dog', 
          img_url_head: '../server/public/images/dog-head.png', 
          img_url_body: '../server/public/images/dog-body.png' 
        },
        {id: 3, 
          name: 'Sheep', 
          img_url_head: '../server/public/images/sheep-head.png', 
          img_url_body: '../server/public/images/sheep-body.png' 
        },
        {id: 4, 
          name: 'Fox', 
          img_url_head: '../server/public/images/fox-head.png', 
          img_url_body: '../server/public/images/fox-body.png' 
        }
      ])
    })
}