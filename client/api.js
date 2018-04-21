import request from 'superagent'

const Url = '/api/v1/'

// export function getAnimals (callback) {
//   request
//     .get(Url)
//     .end((err, res) => {
//       callback(err, res.body)
//     })
// }

export function getCreAnimals (callback) {
  request
    .get(Url)
    console.log("getting api stuff")
    .end((err, res) => {
      callback(err, res.body)
    })
}

// export function getSounds (callback) {
//   request
//     .get(Url)
//     .end((err, res) => {
//       callback(err, res.body)
//     })
// }