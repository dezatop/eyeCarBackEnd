const {Schema, model} = require('mongoose')



const CarSchema = new Schema({
    brandAuto:{type: String},
    cost:{type: String},
    traveled:{type: String},
    geolocation:{type: String},
    numberAuto:{type: String},
    vin:{type: String},
    transmission:{type: String},
    benzin:{type: String},
    dtp:{type: String}
})


module.exports = model('Cars', CarSchema)