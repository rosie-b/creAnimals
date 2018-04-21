exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('Animals').insert([
        {id: 1, 
          name: 'Cat', 
          img_url_head: '/images/cat_head.png', 
          img_url_body: '/images/cat_body.png' 
        },
        {id: 2, 
          name: 'Dog', 
          img_url_head: '/images/dog_head.png', 
          img_url_body: '/images/dog_body.png' 
        },
        {id: 3, 
          name: 'Sheep', 
          img_url_head: '/images/sheep_head.png', 
          img_url_body: '/images/sheep_body.png' 
        },
        {id: 4, 
          name: 'Fox', 
          img_url_head: '/images/fox_head.png', 
          img_url_body: '/images/fox_body.png' 
        }
      ])
    })
}