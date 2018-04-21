import request from 'superagent'

const Url = 'http://localhost:3000/api/v1'

export function getCreatures (callback) {
    console.log("I am in the api js now")
    request
        .get(Url)
        .end((err, res) => {
            callback(err, res.body)
            console.log(res.body)
        })
}