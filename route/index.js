const Router = require('express').Router
const carController = require('../controllers/car-controller')
const router = new Router()




router.post('/search', carController.createCar)



module.exports = router