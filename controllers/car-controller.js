const CarService = require('../service/car-service')
const ApiError = require('../exceptions/api-error')


class carController {
    async createCar (req, res, next) {
        try {
            const {numberAuto, vin} = req.body

            if(!numberAuto && !vin) {
             return next(ApiError.BadRequest('Can not field empty'))
            }

            const car = await CarService.SearchCar(numberAuto,vin)

            // const ip =  req.connection.remoteAddress

            return res.json(car)
        } catch (err) {
            next(err)
        }
    }
}


module.exports = new carController()