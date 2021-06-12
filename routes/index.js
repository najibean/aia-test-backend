const router = require('express').Router()
const flickr = require('./flickr')

router.get('/', (req, res) => {
    res.status(200).json({
        msg: "this is main index routes om Rafik"
    })
})

// router.use('/flickr', (req, res) => {
//     res.status(200).json({
//         msg: "this is end point of flicker"
//     })
// })

router.use('/flickr', flickr)

module.exports = router