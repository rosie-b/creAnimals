# creAnimals

A place to create a gallery of weird new animals, by mashing existing animals together.

# User Stories (MVP)
- [ ] As a user, I can see a gallery of creatures that are a combination of other animals mashed together. 
- [ ] As a user, I can select a creature from the gallery and view it's profile As a user, I can view a creature's profile and will see it's name, image, click to hear the sound it makes, read about it's characteristics/likes/dislikes, diet, habitat. 
- [ ] As a user, I can create my own creature and assign the details of it's profile. 
- [ ] As a user, I can view my newly created creature in the main gallery.

# User Stories (Stretch Goals)
- [ ] As a user, I can record my own sound when creating a creature (MVP is to select from a drop down of options only) 
- [ ] As a user, I enter my name into the profile when creating a creature, so that seaches can be performed on the main gallery to filter on those created by specific users. 
- [ ] As a user, I can select two profiles to mash together, which will randomly assign features from each profile to create a whole new creature.

## Install
Set up in the terminal:
```shell
git clone https://github.com/rosie-b/creAnimals
cd creAnimals
yarn
yarn dev
```
## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Home | View for main/landing page |
  | Header | View holding site 'logo'. Shows at top of all pages. |
  | Footer | View for contact details / invitation to provide feedback. Shows at bottom of all pages. |
  | About | View for for info about CreAnimals |
  | Gallery | View for display of all the creAnimals in the database. |
  | Profile | View for individual existing creation |
  | CreateStep1 | View for user to start creating animal - instructions, select animals from drop downs. Creates initial database record. |  
  | CreateStep2 | View for user to complete details of newly created animal. |
   
## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | creAnimals | Store information about all the creatures |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| GET | /api/creAnimals | No | Get all the creatures in the database and render in the gallery | An array of creAnimal objects |
| GET | /api/creAnimals/:id | No | Get the individual creature from the database and render in the profile | A creAnimal object |
| POST | /api/creAnimals | No | Save new creature to the database | A creAnimal object |

## WIP - to complete full details -
