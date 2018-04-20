exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Sounds').del()
    .then(function () {
      // Inserts seed entries
      return knex('Sounds').insert([
        {id: 1, 
          name: 'Alpaca', 
          sound_url: '../server/public/sounds/alpaca.mp3' 
        },
        {id: 2, 
          name: 'Cat', 
          sound_url: '../server/public/sounds/cat.mp3' 
        },
        {id: 3, 
          name: 'Cow', 
          sound_url: '../server/public/sounds/cow.mp3' 
        },
        {id: 4, 
          name: 'Dog', 
          sound_url: '../server/public/sounds/dog.mp3' 
        },
        {id: 5, 
          name: 'Owl', 
          sound_url: '../server/public/sounds/owl.mp3' 
        },
        {id: 6, 
          name: 'Parrot', 
          sound_url: '../server/public/sounds/parrot.mp3' 
        },
        {id: 7, 
          name: 'T-Rex', 
          sound_url: '../server/public/sounds/t-rex.mp3' 
        }
      ])
    })
}