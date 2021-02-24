const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({
        msg: "this is main index routes"
    })
})

router.use('/flickr', (req, res) => {
    res.status(200).json({
        msg: "this is end point of flicker"
    })
})

module.exports = router