# sound files
> To decide if to have set audio files availble to select from OR (ideally) user records this themselves.

# images
> To decide how fancy this needs/can be in the timeframe.

# routes & views
> '/creAnimals   ('index', creAnimals_table)
    
      router.get('/', (req, res) {
        res.redirect('/creAnimals')
      })

      router.get('/creAnimals', (req, res) {
        db.getAll()
          .then(creAnimals => {
            res.render('index', {creAnimals: creAnimals})
          })
          .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
          })
      })

> '/creAnimals/:id  ('profile', creAnimals_table)

    router.get('/creAnimals/:id', (req, res) {
      db.getOne(req.params.id)
        .then(creAnimal => {
          db.getProfile(creAnimal.id)
            .then(profile => {
              res.render('profile', creAnimals_table)
            })
        })
    })

> '/creAnimals/create/step-1 ('create-step1', animals_table)

    router.get('/creAnimals/create/step-1', (req, res) => {
      res.render('create-step1')
    })

    router.post('/', (req, res) {
      db.createProfile(animals)    // animal_1 and animal_2 ids submitted via the drop down options
        .then(newCreAnimal => {
          res.redirect(/creAnimals/create/step-2', newCreAnimal)   // take this newly created record and bring it into step-2
        })
    })

> '/creAnimals/create/step-2 ('create-step2', all tables used to create new via POST)

    router.get('/creAnimals/create/step-2', (req, res) {
      res.render('create-step2', newCreAnimal)
    })

    router.get('/', (req, res) {
      db.getOne(newCreAnimal)
        .then(id => {
          db.addProfileInfo(id, newData)
          .then(profile => {
            res.redirect('/')
          })
        })
    })
      
  
    
# databases
> animals_table (id, name, image_full, image_1, image_2)
> creAnimals_table (id, animal_id_1, animal_id_2, name, species, likes, dislikes, diet, habitat, sound_id)
> sounds_table (id, audio_file)

# functions

> getAll()          shows all creAnimal in the gallery
> getOne()          get a single creAnimal
> getProfile()      get profile of single creAnimal
> createProfile()   create a new record in the creAnimals_table
> addProfileInfo()  take the newly created record and add the remaining data input in the form of step-2

