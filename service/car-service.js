const carModel = require('../models/car-model')
const ApiError = require('../exceptions/api-error')

class CarService {
    async SearchCar (numberAuto, vin) {
        const car = await carModel.find({$or:[{numberAuto: numberAuto}, {vin: vin}]})

        if(car.length === 0) {
            throw ApiError.BadRequest('Машина не была найдена')
        }

        return car
    }
}


module.exports = new CarService()