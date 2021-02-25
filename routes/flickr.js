const router = require('express').Router()
const request = require('request')
const qs = require('query-string')

const baseURL = {
    method: 'flickr.photos.search',
    api_key: '847b43221e688059973358acc1294ba5',
    format: 'json',
    nojsoncallback: '1',
    per_page: '20'
}

// >> from other proven resources, he has permissioned api_key
// "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=847b43221e688059973358acc1294ba5&per_page=20"

const url = 'https://www.flickr.com/services/rest/?'

/* GET home page. */
router.get('/', function (req, res, next) {
    const { tags } = req.query
    const reqURL = url + qs.stringify({ ...baseURL, tags })
    console.log(reqURL)
    request({ url: reqURL, json: true }, function (request, response) {
        return res.json(response.body)
    })
});

module.exports = router;