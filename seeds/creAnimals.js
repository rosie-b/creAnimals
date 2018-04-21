exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('CreAnimals').del()
    .then(function () {
      // Inserts seed entries
      return knex('CreAnimals').insert([
        {id: 1,
          img_url_head: '../server/public/images/cat-head.png', 
          img_url_body: '../server/public/images/dog-body.png',
          name: 'Albert',
          species: 'CatDog',
          likes: 'Long walks under the house and crapping on driveways',
          dislikes: 'Being told what to do',
          diet: 'Socks',
          habitat: 'Under the house',
          sound_url: '../server/public/sounds/t-rex.mp3'
        },
        {id: 2,
          img_url_head: '../server/public/images/fox-head.png', 
          img_url_body: '../server/public/images/mouse-body.png',
          name: 'Crack Fox',
          species: 'FoxMouse',
          likes: 'Needles',
          dislikes: 'The world',
          diet: 'Head n Shoulders, toothpaste and big pieces of shit',
          habitat: 'In the trash',
          sound_url: '../server/public/sounds/parrot.mp3'
        },
        {id: 3,
          img_url_head: '../server/public/images/sheep-head.png', 
          img_url_body: '../server/public/images/cat-body.png',
          name: 'Mildred',
          species: 'SheepCat',
          likes: 'Telling long and pointless stories revolving around toenails',
          dislikes: 'Efficiency',
          diet: 'Toenails',
          habitat: 'Isolated islands of any sort',
          sound_url: '../server/public/sounds/dog.mp3'
        },
        {id: 4,
          img_url_head: '../server/public/images/dob-head.png', 
          img_url_body: '../server/public/images/sheep-body.png',
          name: 'Ralph',
          species: 'DogSheep',
          likes: 'Barking orders at self in mirror',
          dislikes: 'Being barked at in the mirror',
          diet: 'Regurgitated grass clippings',
          habitat: 'Penthouse apartments at the top of any skyrise building',
          sound_url: '../server/public/sounds/alpaca.mp3'
        }
      ])
    })
}