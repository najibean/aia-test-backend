const router = require('express').Router()
const request = require('request')
const qs = require('query-string')
const got = require('got')
const axios = require('axios')

const baseURL = {
    method: 'flickr.photos.getRecent',
    api_key: 'eb884d8dd3938fa40910decb88bbd9ad',
    format: 'json',
    nojsoncallback: '1',
    per_page: '10'
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
    // got(reqURL, {json: true}).then(response => {
    //     // return res.json(response.body.url)
    //     console.log(response.body.url);
    // })
    
    // const dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&nojsoncallback=1&api_key=847b43221e688059973358acc1294ba5&per_page=20'
    // axios.get(dataUrl).then(response => {
    //     return res.json(response.body)
    // })

    // const getData = async(reqUrl) => {
    //     try {
    //         const response = await axios.get(reqUrl)
    //         const data = response.body
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
});

module.exports = router;