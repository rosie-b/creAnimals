exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('CreAnimals').del()
    .then(function () {
      // Inserts seed entries
      return knex('CreAnimals').insert([
        {id: 1,
          img_url_head: '/images/cat_head.png', 
          img_url_body: '/images/dog_body.png',
          name: 'Albert',
          species: 'CatDog',
          likes: 'Long walks under the house and crapping on driveways',
          dislikes: 'Being told what to do',
          diet: 'Socks',
          habitat: 'Under the house',
          sound_url: '/sounds/t-rex.mp3'
        },
        {id: 2,
          img_url_head: '/images/fox_head.png', 
          img_url_body: '/images/sheep_body.png',
          name: 'Crack Fox',
          species: 'FoxSheep',
          likes: 'Needles',
          dislikes: 'The world',
          diet: 'Head n Shoulders, toothpaste and big pieces of shit',
          habitat: 'In the trash',
          sound_url: '/sounds/parrot.mp3'
        },
        {id: 3,
          img_url_head: '/images/sheep_head.png', 
          img_url_body: '/images/cat_body.png',
          name: 'Mildred',
          species: 'SheepCat',
          likes: 'Telling long and pointless stories revolving around toenails',
          dislikes: 'Efficiency',
          diet: 'Toenails',
          habitat: 'Isolated islands of any sort',
          sound_url: '/sounds/dog.mp3'
        },
        {id: 4,
          img_url_head: '/images/dog_head.png', 
          img_url_body: '/images/sheep_body.png',
          name: 'Ralph',
          species: 'DogSheep',
          likes: 'Barking orders at self in mirror',
          dislikes: 'Being barked at in the mirror',
          diet: 'Regurgitated grass clippings',
          habitat: 'Penthouse apartments at the top of any skyrise building',
          sound_url: '/sounds/alpaca.mp3'
        }
      ])
    })
}